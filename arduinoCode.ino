void setup() {
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
   pinMode(5, INPUT);
   pinMode(6, INPUT);
   pinMode(7, INPUT);
   pinMode(8, INPUT);
   pinMode(9, INPUT);
   pinMode(10, INPUT);

  Serial.begin(9600);
}

void loop() {
  int val2 = digitalRead(2);
  int val3 = digitalRead(3);
  int val4 = digitalRead(4);
  int val5 = digitalRead(5);
  int val6 = digitalRead(6);
  int val7 = digitalRead(7);
  int val8 = digitalRead(8);
  int val9 = digitalRead(9);
  int val10 = digitalRead(10);

  Serial.println("$");

  Serial.print("Val2:");
  Serial.println(val2);
  delay(100);

  Serial.print("Val3: ");
  Serial.println(val3);
  delay(100);
    
  Serial.print("Val4: ");
  Serial.println(val4);
  delay(100);
    
  Serial.print("Val5: ");
  Serial.println(val5);
  delay(100);
    
  Serial.print("Val6: ");
  Serial.println(val6);
  delay(100);
    
  Serial.print("Val7: ");
  Serial.println(val7);
  delay(100);

  Serial.print("Val8: ");
  Serial.println(val8);
  delay(100);
    
  Serial.print("Val9: ");
  Serial.println(val9);
  delay(100);
    
  Serial.print("Val10: ");
  Serial.println(val10);
  delay(100);

    
  delay(1000);

}