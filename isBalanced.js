//Solve java-stack using javaScript


//stack
class STACK 
{
  //initialize
  constructor()
  {
    this.data = [];
  }
  //add to stack
  add(record)
  {
    this.data.push(record);
  }
  //remote from stack
  remove()
  {
    return this.data.pop();
  }
  //print the stack
  print()
  {
    console.log('-----');
    for(let i = this.data.length-1; i >=0; i--)
      console.log('|',this.data[i],'|');
    console.log('-----');
  }
  //peek last element
  peek()
  {
    return this.data[this.data.length-1];
  }
  //check if empty
  empty()
  {
    if(this.data.length===0)
      return true;
    else
      return false;
  }
}
