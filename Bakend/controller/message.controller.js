
import Conversation from "../models/conversational.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
        messages: [],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    conversation.messages.push(newMessage._id);

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(200).json({ message: "Message sent successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// GET MESSAGES
export const getMessages = async (req, res) => {
  try {
    const { id: chatUser } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      members: { $all: [senderId, chatUser] },
    }).populate("messages", "-__v");

    if (!conversation) {
      return res.status(200).json([]);
    }

    res.status(200).json(conversation.messages);

  } catch (error) {
    console.log("Error in getMessages", error);
    res.status(500).json({ error: "Internal server error" });
  }
};