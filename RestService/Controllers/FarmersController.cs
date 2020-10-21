using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Models;
using Newtonsoft.Json;
using System;

namespace Controllers{
    public class FarmerController : ControllerBase{
        
        //Obtiene los datos del archivo Json que contiene los datos de los porductores
        //y los muestra en una direccion url local para que el frontend obtenga los datos 
        [Route ("api/farmers")]
        [HttpGet]
        public IEnumerable<Farmers> FarmerInfo(){
            int size = getSize();
            Farmers[] farmers = new Farmers[size];
            string json = System.IO.File.ReadAllText(@"./JsonDataBase/farmers.json");
            dynamic array = JsonConvert.DeserializeObject(json);
            // List<Farmers> farmers = new List<Farmers>();
            // foreach(var element in array){    
            //     farmers.Add(farmer);
            // } 
            for(int index = 0; index < size; index++){
                Farmers farmer = JsonConvert.DeserializeObject<Farmers>(array[index].ToString());
                farmers[index] = farmer;
            }
            return farmers;
        }

        //Obtiene la longitud de los objetos que contiene el archivo Json y lo retorna
        public int getSize(){
            string json = System.IO.File.ReadAllText(@"./JsonDataBase/farmers.json");
            dynamic array = JsonConvert.DeserializeObject(json);
            // Console.WriteLine((array).ToString());
            return array.Count;
        }
        //Edita la informacion del productor elegido del archivo Json donde estan los datos 
        //de los productores
        public void editFarmers(){
            string json = System.IO.File.ReadAllText(@"./JsonDataBase/farmers.json");
            dynamic jsonObj = Newtonsoft.Json.JsonConvert.DeserializeObject(json);
            jsonObj[0]["name"] = "Ronny";
            string output = Newtonsoft.Json.JsonConvert.SerializeObject(jsonObj, Newtonsoft.Json.Formatting.Indented);
            System.IO.File.WriteAllText(@"./JsonDataBase/farmers.json", output);
        }

        //Agrega a la informacion del archivo Json donde estan los datos de los productores
        //una nueva instancia de productor
        public void addDataJsonFarmers(Farmers farmer){
            string json = System.IO.File.ReadAllText(@"./JsonDataBase/farmers.json");
            var list = JsonConvert.DeserializeObject<List<Farmers>>(json);
            list.Add(farmer);
            var convertedJson = JsonConvert.SerializeObject(list, Formatting.Indented);
            System.IO.File.WriteAllText(@"./JsonDataBase/farmers.json", convertedJson.ToString());
            
        }
    }

}