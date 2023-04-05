function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62KZ8obhbF4":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxfDcpjdDRq2z3Nt9Cu-6Itixw-b2hyjaoaVLbswZXdrBhUtnOT1WztqpK-yZXtxt5b/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

