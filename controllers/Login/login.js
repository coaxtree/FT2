var express = require('express')
  , router = express.Router();

global.users = [
	{
		id : 1,
		familyname: 'admin',
		name: 'admin',
		mail: 'admin@admin.com',
		password: 'admin'
	}
]

router.get('/',function(req,res){
	return res.json({users:global.users,
		error: false
		});
});

router.post('/',function(req,res){
	if(!!req.body.name){
	return res.json({
		message: 'User name missing',
		message: req.body.name,
		error: true
		});
}
global.users.push(req.body);
return res.json({
		message: 'Done',
		error: false
		});
});

router.put('/:userid',function(req,res)
{
	for(let i=0;i<global.users.length;i++)
{
	if(global.users[i].id === parseInt(req.params.userid,10))
	{
		global.users[i].familyname = req.body.familyname;
		global.users[i].name = req.body.name;
		global.users[i].mail = req.body.mail;
		global.users[i].password = req.body.password;
		return res.json({
			message: 'Success',
			error: false
		});
	}
}

});

router.get('/:userid',function(req,res)
{

});

router.delete('/:userid',function(req,res)
{

});
module.exports = router;