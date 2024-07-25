const { PaymentData, Sequelize } = require('../models');

const paymentDatasController = {};

paymentDatasController.searchAPaymentData = async (req, res) => {
  const Op = Sequelize.Op;

  try {
    const paymentDatas = await PaymentData.findOne({
      where: { user_id: { [Op.like]: `%${req.params.customerId}%` } },
    });

    return res.json({
      success: true,
      data: paymentDatas,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Payment data not found",
      error: error.message,
    });
  }
};

paymentDatasController.getAllPaymentDatas = async (req, res) => {
  try {
    const allPaymentDatas = await PaymentData.findAll();

    return res.json({
      success: true,
      message: "All customers' payment data retrieved successfully",
      data: allPaymentDatas,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve payment data",
      error: error.message,
    });
  }
};

paymentDatasController.createNewPaymentData = async (req, res) => {
  try {
    const newPaymentData = await PaymentData.create({
      cardNumber: req.body.cardNumber,
      validThru: req.body.validThru,
      user_id: req.body.user_id,
    });

    return res.send(newPaymentData);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create payment data",
      error: error.message,
    });
  }
};

paymentDatasController.modifyPaymentData = async (req, res) => {
  let body = req.body;

  try {
    const updatePaymentData = await PaymentData.update(
      {
        cardNumber: req.body.cardNumber,
        validThru: req.body.validThru,
        user_id: req.body.user_id,
      },
      {
        where: {
          id: body.id,
        },
      }
    );

    return res.json({
      success: true,
      message: "Customer's payment data updated successfully",
      data: updatePaymentData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to update customer's payment data",
      error: error.message,
    });
  }
};

paymentDatasController.deletePaymentData = async (req, res) => {
  let body = req.body;

  try {
    const deletePaymentData = await PaymentData.destroy({
      where: {
        id: body.id,
      },
    });
    return res.json({
      success: true,
      message: "Customer's payment data deleted successfully",
      data: deletePaymentData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to delete customer's payment data",
      error: error.message,
    });
  }
};

module.exports = paymentDatasController;
