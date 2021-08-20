Data modeling 
know the questions it will need to answer. Understanding the business problems and the application use cases up front is essential. 

  -- access patterns that are required by the operations and business support systems (OSS/BSS)  
  

tableName: 

relationships: 

query patterns  

Access patterns  

keeping related data in close proximity 

Use sort order.  
Related items can be grouped together and queried efficiently if their key design causes them to sort together.   

design data keys to distribute traffic evenly across partitions as much as possible, avoiding "hot spots."  

Data size - how much stored and requested   

Data shape - organizes data so that its shape in the database corresponds with what will be queried  

Data velocity -  peak query loads prediction  

key design  

GSI   

TTL Y/n why  

Version  

Composite key needs  

 
Pattern :  




Goal  

  To reduce query complexity and scale efficiently   
  
