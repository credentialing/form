class DocService { 
  es: EventSource;
  
  constructor() {
    this.es = new EventSource('http://localhost:8001/doc/events');
    console.log(this.es)
    this.es.onmessage = (e: Event) => {
      debugger;
    }
    this.es.addEventListener('UPDATED',  (e: Event) => {
      this.onmessage(e);
    });
    
  }
  
  onmessage(event: Event) {
    
  }

}
const service: DocService = new DocService();
export default service;