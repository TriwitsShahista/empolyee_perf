 <?php
   
require APPPATH . 'libraries/REST_Controller.php';
class User extends REST_Controller {
    
    public function __construct() {
       parent::__construct();
       $this->load->database();
        $this->load->model('Data_model');
    }
       

      
public function login_post()
    {
        if ($this->post("login_id")) {
            $login_id = $this->post("login_id");
            $password = $this->post("password");
            $user = $this->Data_model->getUserData($login_id, $password);
            if($user->num_rows() > 0){
                $userData = $user->row();
           $this->response(
                    [
                        "status" => true,
                        "message" => 'Successfully login',
                        "data" =>$userData
                    ],
                    REST_Controller::HTTP_OK
                );
        }else{
            $this->response(
                    [
                        "status" => false,
                       "message" => "Incorrect email id or password",
                    ],
                    REST_Controller::HTTP_BAD_REQUEST
                );
        }
        }

        
}
        
    }     
