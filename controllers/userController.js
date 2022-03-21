const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const User = require('./../models/userModel');
const Task = require('./../models/taskModel');
const uid = require('./../utils/generateUID');

exports.getAllUsers = catchAsync(async (req, res, next) => {

	
});
exports.changeAdminStatus = catchAsync(async (req, res, next) => {
	
});
exports.updateMe = catchAsync(async (req, res, next) => {
	
	const user = await User.findByIdAndUpdate(req.user.id, req.body, {
		new: true
	});

	


});
exports.correctData = catchAsync(async (req, res, next) => {
	const tasks = await Task.find();

	tasks.forEach(async (task) => {
		try {
			task.assignedTo.forEach(async id => {
				try {
					const user = await User.findById(id);
					if (!user) {
						console.log(task.title);
						await Task.findByIdAndDelete(task.id);
					}
				}
				catch (err) {
					return next(new AppError(err, 400));
				}
			});
		}
		catch (err) {
			return next(new AppError(err, 400));
		}
	});
	res.status(200).json({
		//message: 'success'
		message: 'success'
	});
});
exports.getUser = catchAsync(async (req, res, next) => {
	

});