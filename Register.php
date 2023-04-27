<?php
   
require APPPATH . 'libraries/REST_Controller.php';
     
class Register extends REST_Controller {
    
    public function __construct() {
       parent::__construct();
       $this->load->database();
        $this->load->model('Data_model');
    }

      
//Insert EmployeeBankDetails Details...
    public function Register_post()
    {
     $data = array('FullName' => $this->input->post('FullName'),
                   'email' => $this->input->post('email'),
                   'password' => $this->input->post('password'),
                   
                  );
           $r = $this->Data_model->Register($data);
           $this->response($r); 
    }

        

}