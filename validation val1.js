<script>
function validate()
	{
	var agevalue=document.forms["form1"]["age"].value;
	if (agevalue < 18)
	{
	alert("You are too Young");	
	return false;
	}
	else
	{
	alert("Enter the Password");
	return true;
	}
}
</script>

