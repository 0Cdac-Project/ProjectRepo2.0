const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");
const app = express.Router();
const mysql = require("mysql2");

const key = config.get("jwtkey");

app.post("/", (request, response) => {
  var username = request.body.username;
  var password1 = request.body.password;
  var userType = request.body.LoginType;
  var staffType = request.body.managementType;

  const connectionDetails = {
    host: config.get("host"),
    database: config.get("database"),
    user: config.get("user"),
    password: config.get("password"),
  };
  const connection = mysql.createConnection(connectionDetails);

  var urlFun = () => {
    if (userType == "management")
      var statement = `select management_password,management_category from management where management_username = '${username}' or management_email = '${username}'`;
    else if (userType == "doctors")
      var statement = `select doctor_password from doctors where doctor_username = "${username}" or doctor_email = "${username}"`;
    else if (userType == "patients")
      var statement = `select patient_password from patients where patient_username = "${username}" or patient_email  = "${username}"`;
    return statement;
  };

  var checkPassword = (result) => {
    if (userType == "management") {
      if (
        result.management_password == password1 &&
        result.management_category == staffType
      )
        return true;
      return false;
    } else if (userType == "doctors") {
      if (result.doctor_password == password1) return true;
      return false;
    } else if (userType == "patients") {
      if (result.patient_password == password1) return true;
      return false;
    }
  };
  connection.query(urlFun(), (error, result) => {
    if (error == null) {
      if (result.length == 0) {
        var responseMessage = {
          message: "User Does not exist",
        };
        response.write(JSON.stringify(responseMessage));
        response.end();
      } else if (!checkPassword(result[0])) {
        var responseMessage = {
          message: "Incorrect Password",
        };
        response.write(JSON.stringify(responseMessage));
        response.end();
      } else {
        var d = new Date().getTime();
        var payload = {
          username: username,
          category: userType.toLowerCase(),
          type: staffType != null ? staffType.toLowerCase() : null,
          login_date: d,
        };
        var token = jwt.sign(payload, key);
        var responseMessage = {
          logintoken: token,
          message: "success",
        };
        response.write(JSON.stringify(responseMessage));
        response.end();
      }
    } else {
      response.write(JSON.stringify(error));
      response.end();
    }
  });
});

app.post("/new", (request, response) => {
  const patient_username = request.body.username;
  const patient_first_name = request.body.firstName;
  const patient_last_name = request.body.lastName;
  const patient_email = request.body.email;
  const patient_password = request.body.password;

  const values = [
    patient_username,
    patient_first_name,
    patient_last_name,
    patient_password,
    patient_email,
  ];
  console.log(values);

  // const statementInsert = `INSERT INTO patients
  //     (patient_username, patient_first_name, patient_last_name, patient_password, patient_email, patient_dob)
  //     VALUES (?, ?, ?, ?, ?, ?)`;
  const statementInsert = `INSERT INTO project_db_v1.patients(extra_col_1,patient_address,patient_bloodgroup,patient_category,patient_dob,patient_username,patient_emergency_contact,patient_first_name,patient_gender,patient_govt_id,patient_height,patient_last_name,patient_marital_status,patient_medical_condition,patient_medical_consultant,patient_medication_history,patient_mobile,patient_nationality,patient_occupation,patient_passport,patient_password,patient_email,patient_weight,patient_image)VALUES("","","","","1999-09-09",?,"",?,"",NULL,0,?,"","","","","","","",NULL,?,?,0,x'FFD8FFE000104A46494600010101009600960000FFDB0043000503040404030504040405050506070C08070707070F0B0B090C110F1212110F111113161C1713141A1511111821181A1D1D1F1F1F13172224221E241C1E1F1EFFDB0043010505050706070E08080E1E1411141E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1E1EFFC000110800B800B803011100021101031101FFC4001D000100020203010100000000000000000000060805070103040209FFC400411000010303010406070409030500000000010002030405110607122131084151617191131422325281A16272B1C11516232433438292D14253C217445594B2FFC4001A010100030101010000000000000000000000030405020106FFC4002E11010002010303020308030100000000000001020304111221315122410513321423617181A1C1F04291E1B1FFDA000C03010002110311003F0095AD07CF88080808083E7719F037C979C6BE1DF3B47B9B8CF81BE49C6BE0E76F326E33E06F9271AF839DBCC9B8CF81BE49C6BE0E76F326E33E06F9271AF839DBCC9BADF8479270AF839DBCC9BADEC09C2BE0E76F326EB7B0270AF839DBCC9BADEC09C2BE0E76F326EB7B0270AF839DBCCB9031C800BD8888733333DDCA3C10101010101010101010101010101010101010101010101010101010101010101010101070E21A09240006492822B76DA268AB5CAE8AAB50D217B4E0B60DE9B07B0EE02A3B66A47794F5D3E4B76862BFEB0683FF00C9CDFF00AB27F85CFDA71F975F64CBE1EEA3DA8683AA2047A861613FEEC5247F573405EC67C73EEF274D963D920A2BF58EB6133D25E6DF5118192E8EA58E03C70782922F59ED28A71DA3BC3B1B77B4B9C1ADB9D117138004EDC93E69CABE5E70B787B57AE5CA020202020202020202020202020208C6D035A5A746DB4545738CB53283EAF4AC3EDCA7F26F693F52A3C99631C754D870DB2CED0AE3ADB683A9355C8F656561A7A227D9A38096C607DAEB71F1FA2CFC99AD7EED4C58298FB228A34C2020202096686DA06A1D2752C14B54FA9A1046FD1CEE26323ECFC07BC7CF2A4C79AD443970572475EEB2FA2F54DAB5659DB71B5CA4E30D9A17707C2EC7BAE1F9F22B469922F1BC32B262B639DACCEAED108080808080808080808080830DACB50D1697D3B5378AE39644311C60E0C8F3EEB4789FA64F52E6F78A5794A4C78E725B8C2A56A6BE5C3515EA7BB5CE6324F31E59F658DEA6B47500B2EF69BCEF2DAA52291B558D5CBA10101010101067F426AAB8E91BEC772A179746486D4404E1B333AC1EFEC3D5E6BBC792693BC23CB8A3257695B1D3B78A1BF5969AED6E97D253543379B9E6D3C8B48EA20E41F05A95B45A378635E934B7196417AE040404040404040404040415C7A45EA675CF5432C34F2FEE96D1ED80783A670E27E430DFEEED543537DEDC5ABA3C7C69CBCB56AACB62020202020202020DB3D1C754BE82FF00269AAA949A5AF05F0027832668CF0FBCD1E602B5A5C9B5B8F953D663DEBCE3D961D5E658808080808080808080831FA8AE7159AC35D759B0594903E5209F7B03207CCE02F2D3C6265DD2BCAD15F2A695D53356D6CF5952F2F9E791D248E3D6E71249F32B226779DDBB11111B43A90101010101010101064B4AD6B6DDAA2D55EF90C6CA7AC8A57387535AF04FD015D5276B44B9C91CAB30B9AD21C01041046410B5982E501010101010101010106B5E91B71345B3C348D761D5D551C240E7BA32F3F5681F3506AADB536F2B7A3AEF93756959CD5101010101064F49D9E7D41A9ED763A60E32D7D5C74EDC756F380CFCB9AE6D6E3132EAB1BCECCE6D834356ECFB5CD6582A77DF4E0FA5A29DC31E9E0713BAEF1E05A7BC15CE2C9192BBBAC949A4EC88291188082DA6C8AEC6F3B3BB4553DD996387D5E4E3C77A325993DE4007E6B530DB95218DA8A71C930962910080808080808080808348F4A7A8222B052877073A791C3C3700FC4AA7AB9ED0D0D0C7D53F9346AA6D010101010105ADE893B20ACB5D4C5AFF0053533A09DD1116AA59061EC0E1833387512D24341EA24F62A3A9CD13E885BC18A63D52D8FD24F66EDDA06867BA86169BEDB03A7A17638C831EDC39FB4070FB41BCB8A87065E16EBDA52E5C7CE142DED731E58F696B9A70411820AD45111C882C27461AC32E94B9D0939F415BE907707B07E6D2AF6927D330CDD747AE25B715A51101010101010101010688E94E08ADB03883831CE01C70CE59FE42A5ABEF0D2D0F696965517841EEBDDB9F6AA98E8A704553626493B0FF002DCF1BC1BE21A5B91D4723A97313BF57568D9E6A5A5A8A9133A9E17C8208CCB2968C8630103789EA19207891DABD99879B321A4F4E5EB555EA2B4586865ADAC9067719C035BC32E713C1AD191C4AF2F6AD63797B5ACDA7685B6D85EC0EC9A5EA22BCEA6F4378BD4603E366334F4CEED683EFB87C4E1E0011959F975337E95E90B98F0457ACF56FC55938829CF4C1D99FE80D4035B5A20C5B2EB2E2B18C1C20A93C4BBB9AFE27EF03DA02D0D365E51C67D94F3E3DA7947BABF2B6AC20DE3D159CEDCD44C24EE834C40F1F4B9FC02B9A3F767EBFFC7F5FE1BBD5C6788080808080808080834C74A4A52FB4D8EB71C229E58B3F7DAD3FF0553571D2257F433D661A195268A77B0CD334FA8F5CC72DC99BD68B4C2FB8DC323818A2E3B87ABDA76011D99EC5167BCD6BB4779E89715795BAFB30545457DD7BAD648E8299F5975BA553E6734720E7B8B9CE279068C9249E4BA998C75EAE6226F6594BCEC868B49F47FD4B6BA2FDEEF35148CA9ADAA038C8617B65DC60EA68DD381CCF96294679BE5899ECB73862B8E61EBE883A6A0B6ECE9FA85D137D72EF3BC8908E2218DC58D6FF007079F98EC0B9D55F7BEDE1EE9ABB5776F8B4FF0011FE0AB2796491E0830FACB4FDBF55E97B869EBAC7BF495D098DFC38B4F36BC7DA6B8023BC05D56D35B728736AC5A3697E726ADB157698D4D71B05C99B955433BA1938707639387711823B885AF5B45A378675A26B3B316BA72DEFD16602DB7DFAA71C249618F3F743CFFC95DD276967EBA7AC7EADD2ADB3C40404040404040404107E9056C15DB24AA9DAC0E9292A63A91C38E01DC3F4909591ABCB3F688A7B6CDDD0E1AFD9A6FEFBAABAF1DAC16C46D2683A3BED03508686CF5D4D3D335F8E3E8E384F23E323BCBB953CD6DF2D616F146D8ED29CF448D1B4F68D0DFAD151134DC2EEE76E3C8E31D3B5D80D1F7882E3DBECF628B55937B71F6849A7A6D5DDBB1CD6BD858E68735C304119042AA9D8FD3765B7E9EB2C167B5C461A2A7DEF451939DC0E71763C324AF6D69B4EF256B158DA19EB4FF11FE0BC25924782020A8BD38F4BC747A9ED1AB29E30D6DC6175355168E72C58DD71EF2C763FA15FD25B7ACD7C29EA2BB4EEAE4AE2B2D27465A134FB2AA89248F22B2AE5A96388E2377763E1DDEC151E3C935D4C447E493518AB6D25A67DBAC278B71F36202020202020202020F1EA2A36DDF4A5D6CB27FDE52C91C6EF85E5A434F9E150D6696724C64A778FDDA7A0D646289C57ED3FB4A95B9A5A4B5C0820F105565D5B7E8E56D65F7A3B57D9491FBEBAB698E7A8BDB807EA0ACECF3C72EFF92FE18DF16CD87B186FA3D9569B88B771F15047148D2305AF68DD7023B43810A1CBF5CA5C5F4425CA37420F6DA7F88FF0425924782020D15D37218E4D91524AE6FB715E21730F6663941FC559D27D7B20D47D0A5AB494573B40524565D9CD92D31719BD4A27541C706B9C03DCD1FD44E7C14BA4D2CC649CB7FD15F5DADACE38C34FD67F864969B1C4040404040404040404154F6D5A7DDA7F5F56B58CC52D69F5B8081C30F27787C9DBC31D98ED5999E9C6ED9D364E78E3FD37FF0042FAF64DB3EBADBB20C94D733263B1AF8D98FAB1CB27571EB896AE9A77AB73DA6DECB736A62848104B5325431806370C8779E3BF2F2F77F5772AD33BAC446CF72F0107B6D3FC47F8212C923C1010683E9C55621D965B69011BF51788CE0FC2D8A527EA5AAD6923D6AFA89F4AA7685B33F50EAEB65A1A096D44ED1277463DA79FED0569E3AF2B4433F2DF8526CB8AD01A00000006000B5984E50101010101010101010104136D1A40EABD2AE752441D73A1266A6C0E2F18F6A3F98031DE02873E3E75E9DD674D97E5DBAF6943BA1CDFDB6DD7372B0D43FD1B2E54A1CC04E332C449031F75CFF2585ABA4CD77F0FA1D35A22DB795B459EB820EB9E68A08CCB34AC8D839B9EE0079A446FD9D56B369DA3ABA6DFA96C70BE4749708C0186FBAE393E5F55DFCBB269D2E59FF14868AB68EB63F4947530CEC1CCC6F071E3D8B99898EE86D4B53A5A367A178E041537A755F593DE74EE9E8A404D3432D54CD07ADE5AD6FF00F0FF00357B495E932ABA99ED0C1F46CD2AEA7A3A8D55571E1F520C14608E3B80FB6FF99000F03DAB6B4B8F68E52C3D665DFD10DCEADA808080808080808080808080834CED3F4BD4E95D594BB45D3B0974505409ABE9E3182DEA73C7D970243BB09CF59C54CD8B8CF38FD5A1A7CDCABF2E6769F66EFD37B44B6BCD14574A86C74B5D1364A0AF27F65283C771E7FD0E19EBE07B8F3C9D5E86693CF1F586BE8F59F3238E4E968EE9F821C010720F1042CD5F75D44315442F8278DB246F18735C320AF62661D44CD677861A974259EA6A9CE32D646C1C7D1B6418F0C919C29633596BEDB922131B5DBE8ED948DA5A181B0C438E0759ED27993E2A29B4DA77954BDED79DEDD5EB5E396BAD73B4BA2A1AFF00D5DD36E8AE57B909638B4E61A5039B9EE1CC8E3EC8F038E19BBA6D1DB2CF5E90AD9F535C3599EEAA3516BADDAA6D76BE4F59967B6D348193D613FCA67B2083CB2F20903BCF0C05A94C516B71AF6865E4CF34A72BFD53FDFD961A8A969E8A8A1A3A589B0D3C11B63898D1C1AD03000F92D288888DA19133333BCBB91E0808080808080808080808083E5ED6BD8E63DA1CD70208232083D451D22F168EA486DD596488816899C66A688FBD472939219F60924E3AB88E20F08FE546DC7DBFF13467B45A2FEFFF00A8BDB357EB2D9FD71B53AA04F4B1FB905482F89CDEA2C39CB47703E2166E7D252D3EA8EADBC1AA99AEF59E8DEFA7B53FAFD9282E15B42FA57D5C0D9835A77DB870C8C1E0B1B2538DA6B1ECD3A6F6AC4B3B6EBF5B22739D24EE6E47C0E3F92E3697535976BF53D3CAFF00454149515531CEEB71BA0FE27E8BD8AB99ACC42B6EAEDAB6B3D5F27E8EA693D429A676E0A5A2043A4079073FDE3DE0601EC5B18B494A4F9967E4CF331D7A439FD015F6AB11B0DA774DFEECCDDA9AAE6DA280F07389F30D1CDCEE23DD38D1E1358E31DE7F663DF3464B72B7D31DBF194C346E9BB6E95B1C56AB6C6431BED4923BDF95FD6E71EDFC14D4A45236855C992725B94B34BA462020202020202020202020202020E3920F3DCB4A43AAA9D94B514CF2CCFB150D18317783CBE5D6AB6A33E2A56794FE9EEBBA4C59E6F1C23BFF00A6C68ADD491DB60B78887A08236C7183CDA1A001C7C02F969B4CCEEFAA8E91D1F147A728679CB5D2D4346E93C1C3B4772F777B369482DB6CA3B7308A68835C79BC9CB8FCD7932E66665A8E6D9ED3E99BED7D752D1CB309E57C91CFB991131C49DC18F7719C769C2FA2D167C56A46F3EA7CF6BF1E6E731B7A7FBDC686E4B9A065DCC8EB5A0CC7D239101010101010101010101010107CC8F646C73E4735AD68C924E000933111BCBAAD66D3B446F328E5D7543184C740C1211FCC78E1F20A965D64474A37B49F04998E59A76FC23F961A967ADBCDDA968EA2AA470A89D91601C01BCE03972EB5472E6BDA26665BB8B4B87057D15DBFBE7BAC1534315353474F03047144D0C63472000C00B1E67794332EC478F6DA7F8AFF00BABDF6793DD925E0F9700E696B80208C105056AD5F14BA7F585CA86DF3BE28629C98DAD3C035DED018E4700E16AE1CB68AC4C4AC5B062CF4FBCAEEEEB66A93911DC2318FF75839788FF0AFE3D67B5D8DAAF81C7D5827F49FEFF7CA4D04D14F13658646C8C7722D390AF56D168DE1F3F931DB1DB8DE369762F5188080808080808080808083C776A08AE3486095CE6F5B483C8F875A8F2E28C95DA56B49AAB697273AF5FEFEC8057534B47572534EDDD918707F107E630563CC6D330FB8C59232D2B78F7EAEEB1CDEAF7BA19F38F45531BF3E0E057168DEB2EEDD6163565A8083376CB5D432DDFA45DEE3CE0371C777E2F353FC8B7CAE68A72473E2EC502410569DA5CDE9F5E5E1FD95259FDA037F25A58A36A42F63FA6180A6865A8A88A9E1617CB2BC318D1CCB89C01E6BB7533B754F6C76B65B29F7379CE95DC643938CF705B1870C6387C4EBF5B6D55F798DA23B7FD6454CA02020202020202020202020EFB7539AAAE860E387B803DC3AFE8A2CF93E5639BF84DA7C5F372D69E51ADB152B69F56B64637027A563CE070C825BF8342C0D3DA66BD5F7587E9DBC21809041070472214C996074B6A0A0BE5B609A1A88FD60B07A5877807B1D8E3C39E33C8ACDC98E692A56ACD6525B2D18ACAAC4AE11D3C43D24D238E035839F1EA5DE0C5F36FB7B7BA1CB9385776B2A4DB7EF6D79D23A52DD2323450363390D6460F0A8C76E4E4F5EE70E616DED1B71F651E33B6FEEDCD5F4DEAD505AD76F46E1BD1BC1CEF34AC4CF8A71DF65CC77E75DD85BFDF2D762A192AEE5571C2D6B496B0B86FBCF6347325475A4DA7684D5ACDA7A2B15D2ADF70B9D557CA007D4CCF95C076B9C49FC569446D1B2F446D1B245B25A56D56D02D8C7805B1BDF29CF6B5848FA80B8CD3B525C659DA929FEB2A31477F9DAD1864BFB56FCF9FD72B5B4197E6608DFDBA3E2B5F8BE5E79DBDFAFFBFF00AC3AB8A42020202020202020202020CC6908C3EEA5E7F971923E83F32B3BE297DB0EDE65A7F0AA6F9F7F11FF0011CDB853B9B5D6DAADDE0F89F1E7BC107FE4B274B3D261F5987B4B5CAB49C4131D92EAA874DDFDF4F736B65B2DD23F55B8C4F19698CE46F11D78C9F91776AEA96E32ADAAC3F369D3BC3DD4FB1AA86ED75F639DCFFD5B85BEBEEAD270D752678377F96F7FA7E45DC82B2C8E5D18DDAAEAA6EA9D4A5F46D115A6859EAD6F85A3743626F0CE3AB38CF70C0EA55AF6E52D8D361F954DBDFDD125CAC08360EC1A99F2EB396719DC8291EE27BC96803EA7C957D4CFA10E79F4B616D3211BF455007121EC27C3047E255CF845BA5AB3F84BE67E2F5EB4B21AB658A202020202020202020202090E8903D3D49EB0D68FC5647C5E7D358FCDB3F078F55A7F273B4AB31BBE979844DCD4537EDE20071381C47CC67E7859186FC2CFA2C76DACD18B456C40413C9B697769765ECD1A77FD207FA2754EF7134C0708BC73C33F08C75AEF9FA76558D2D7E77CCFEEE81AE1684041BDB61D6236DD34FBA4CDC4F7170737238889B90DF3249F98547517DEDB2A66B6F3B78663692DCDA69DF8E5381E6D3FE15DF84CFDECC7E0C4F8B47DD44FE3FC4A04B79F3E2020202020FFD9');`;
  const connectionDetails = {
    host: config.get("host"),
    database: config.get("database"),
    user: config.get("user"),
    password: config.get("password"),
  };
  const connectionPool = mysql.createConnection(connectionDetails);
  response.setHeader("Content-Type", "application/json");

  connectionPool.query(statementInsert, values, (error, result) => {
    if (error) {
      console.error("Error during insertion:", error);
      response.status(500).json({ error: "Internal Server Error" ,code:error.code,sqlMessage:error.sqlMessage});
    } else {
      response.json(result);
    }
  });
});

module.exports = app;
