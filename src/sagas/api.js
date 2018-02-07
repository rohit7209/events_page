import axios from 'axios';


const Api = {
    fetchUser: (text) => {
        return { user: text }
    },
    fetchEvents: () => {
        return axios.get('http://localhost:3000/test.json')
    }
}

export default Api;

/**
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let self = this;
                return { payload: self.responseText }
            }
        };
        //        xhttp.open("GET", "http://rohitsharma.xyz/api/events_page_api.php?export_event_list=true", true);      
        xhttp.open("GET", "http://localhost:3000/test.json", true);
        xhttp.send(); */