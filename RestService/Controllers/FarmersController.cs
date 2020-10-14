using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Models;
using Newtonsoft.Json;
using System;

namespace Controllers{
    public class FarmerController : ControllerBase{
        
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
        public int getSize(){
            string json = System.IO.File.ReadAllText(@"./JsonDataBase/farmers.json");
            dynamic array = JsonConvert.DeserializeObject(json);
            // Console.WriteLine((array).ToString());
            return array.Count;
        }

        public void editFarmers(){
            string json = System.IO.File.ReadAllText(@"./JsonDataBase/farmers.json");
            dynamic jsonObj = Newtonsoft.Json.JsonConvert.DeserializeObject(json);
            jsonObj[0]["name"] = "Ronny";
            string output = Newtonsoft.Json.JsonConvert.SerializeObject(jsonObj, Newtonsoft.Json.Formatting.Indented);
            System.IO.File.WriteAllText(@"./JsonDataBase/farmers.json", output);
        }

        public void addDataJsonFarmers(Farmers farmer){
            string json = System.IO.File.ReadAllText(@"./JsonDataBase/farmers.json");
            var list = JsonConvert.DeserializeObject<List<Farmers>>(json);
            // list.Add(new Farmers(67,"Allan", "Calderon", "Cartago", 45, 15, "caca", "calquito", 12));
            list.Add(farmer);
            var convertedJson = JsonConvert.SerializeObject(list, Formatting.Indented);
            System.IO.File.WriteAllText(@"./JsonDataBase/farmers.json", convertedJson.ToString());
            
        }
    }

}