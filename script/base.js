(function(angular){

	/**
	* myApp Modul
	*
	* Description
	*/
	angular.module('myApp', ['angular-clipboard'])
		.controller('myController', ['$scope', function($scope){
			$scope.itext = 'ahaha';
			// 数据实例
			$scope.userList = [
				{
					name: '文乾华',
					phoneNum: '15984019346',
					userName: 'w019346',
					userCode: 'wqh9346',
					ID: '11245354',
					bank: '农业银行',
					bankNum: '622848***7778',
					mail: 'w019346@163.com',
					mailCode: 'wqg9346',
					timeIn: '2017.03.13',
					timePay: '2017.04.09',
					other: '8家店铺'
				},
				{
					name: '陈元明',
					phoneNum: '18111179350',
					userName: 'c179350',
					userCode: 'cym9350',
					ID: '11301444',
					bank: '农业银行',
					bankNum: '622848***9714',
					mail: 'cym179350@163.com',
					mailCode: 'cym9350',
					timeIn: '2017.03.17',
					timePay: '2017.04.12',
					other: '8+2家店铺'
				},
				{
					name: '熬启红',
					phoneNum: '15884189607',
					userName: 'a189607',
					userCode: 'aqh9607',
					ID: '11304890',
					bank: '农业银行',
					bankNum: '622848***7513',
					mail: 'aqh189607@163.com',
					mailCode: 'aqh9607',
					timeIn: '2017.03.17',
					timePay: '2017.04.12',
					other: '8家店铺'
				},
				{
					name: '吴定才',
					phoneNum: '13982484198',
					userName: 'w484198',
					userCode: 'wdc4198',
					ID: '11312734',
					bank: '农业银行',
					bankNum: '622848***1717',
					mail: 'wdc484198@163.com',
					mailCode: 'wdc4198',
					timeIn: '2017.03.20',
					timePay: '2017.04.13',
					other: '8家店铺'
				}
			];


			// 新输入数据
			$scope.initModel = function(){
				$scope.newOne = {
					name: '',
					phoneNum: '',
					userName: '',
					userCode: '',
					ID: '',
					bank: '农业银行',
					bankNum: '',
					mail: '@163.com',
					mailCode: '',
					timeIn: '2017.',
					timePay: '',
					other: '家店铺'
				}
			};
			$scope.initModel();

			// 显示增加项
			$scope.addOneInput = true;
			$scope.ifAddOne = function(){
				$scope.addOneInput = !$scope.addOneInput;
			}

			// 增加成员
			$scope.addOne = function(){
				// 获取续费时间
				$scope.newOne.timePay = returnDate($scope.newOne.timeIn);
				// 增加数组内容
				$scope.userList.push($scope.newOne);
				// 重新初始化数据
				$scope.initModel();
			};


			// 输入字符串时间,返回28天后日期
			var returnDate = function(timeStr){
				var _timeArr = timeStr.split(".");
				var _year = parseInt(_timeArr[0]);
				var _month = parseInt(_timeArr[1]);
				var _date = parseInt(_timeArr[2]);
				var d = new Date();
				var _nextTime = d.setFullYear(_year,_month-1,_date) + 2332800000;
				return _nextTime;
			}

			// 现在时间
			$scope.nowTime = function(){
				return new Date();
			}

			// 移除某项
			$scope.removeOne = function(index){
				console.log(index)
				$scope.newList = [];
				for(var i=0; i<$scope.userList.length; i++){
					if($scope.userList[i].ID !== index){
						$scope.newList.push($scope.userList[i])
					}else{
						continue;
					}
				}
				$scope.userList = $scope.newList;
			}




		}])


})(angular);