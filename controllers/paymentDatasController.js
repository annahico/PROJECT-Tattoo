const { PaymentData, Sequelize } = require('../models');
const paymentDatasController = {};

// Search for a payment data entry by customer ID
paymentDatasController.searchAPaymentData = async (req, res) => {
  const Op = Sequelize.Op;

  try {
    const paymentData = await PaymentData.findOne({
      where: { user_id: { [Op.like]: `%${req.params.customerId}%` } },
    });

    if (!paymentData) {
      return res.status(404).json({
        success: false,
        message: "Payment data not found",
      });
    }

    return res.json({
      success: true,
      data: paymentData,
    });
  } catch (error) {
    console.error("Error searching payment data:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve payment data",
      error: error.message,
    });
  }
};

// Get all payment data entries
paymentDatasController.getAllPaymentDatas = async (req, res) => {
  try {
    const allPaymentDatas = await PaymentData.findAll();

    return res.json({
      success: true,
      message: "All payment data retrieved successfully",
      data: allPaymentDatas,
    });
  } catch (error) {
    console.error("Error retrieving all payment data:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve payment data",
      error: error.message,
    });
  }
};

// Create a new payment data entry
paymentDatasController.createNewPaymentData = async (req, res) => {
  const { cardNumber, validThru, user_id } = req.body;

  // Basic validation
  if (!cardNumber || !validThru || !user_id) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  try {
    const newPaymentData = await PaymentData.create({ cardNumber, validThru, user_id });
    return res.status(201).json({
      success: true,
      message: "Payment data created successfully",
      data: newPaymentData,
    });
  } catch (error) {
    console.error("Error creating payment data:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to create payment data",
      error: error.message,
    });
  }
};

// Update an existing payment data entry
paymentDatasController.modifyPaymentData = async (req, res) => {
  const { id, cardNumber, validThru, user_id } = req.body;

  // Basic validation
  if (!id || !cardNumber || !validThru || !user_id) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  try {
    const [updated] = await PaymentData.update(
      { cardNumber, validThru, user_id },
      { where: { id } }
    );

    if (updated === 0) {
      return res.status(404).json({
        success: false,
        message: "Payment data not found",
      });
    }

    return res.json({
      success: true,
      message: "Payment data updated successfully",
    });
  } catch (error) {
    console.error("Error updating payment data:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to update payment data",
      error: error.message,
    });
  }
};

// Delete a payment data entry
paymentDatasController.deletePaymentData = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await PaymentData.destroy({ where: { id } });

    if (deleted === 0) {
      return res.status(404).json({
        success: false,
        message: "Payment data not found",
      });
    }

    return res.json({
      success: true,
      message: "Payment data deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting payment data:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to delete payment data",
      error: error.message,
    });
  }
};

module.exports = paymentDatasController;
