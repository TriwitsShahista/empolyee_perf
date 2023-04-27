<?php

//namespace apis\libraries;
use Restserver\Libraries\REST_Controller;

defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  // header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  exit;
}
   
require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';
     
class EmpReg extends REST_Controller {
    
    public function __construct() {
       parent::__construct();
       $this->load->database();
    }

//--------------------------Insert-----------------------------//
    public function postEmp_post(){
    if($this->input->post('name')){
        $data=array(
             'name'=>$this->input->post('name'), 
             'email'=>$this->input->post('email'),
             'department'=>$this->input->post('department'),
             'att'=>$this->input->post('att')
          );
      
       $r = $this->db->insert('employee_prf',$data);
       $this->response($r);
    }
  }    

//--------------------------Getting data in drop down----------------------//
  public function fetchEmp_post()
    {
        $pass=$this->input->post('department');
    
        $login_user_details=$this->db->where('department', $pass)->get('employee_prf');

        if($login_user_details->result()>0)
        {
        $login_user_detailssssss=$login_user_details->result();

        $r=$login_user_detailssssss;
        }
        else
        {
        $r='Failed';
        }

        $this->response($r);
    }


//----------------------------------Insert for employee review-----------------------------------------//
     public function postEmpRev_post(){
        date_default_timezone_set('Asia/Kolkata');
              $now = date('Y-m-d');
              $time = date('h:i:s A', time ());
    if($this->input->post('department')){
        $data=array(
             // 'name'=>$this->input->post('name'), 
             // 'email'=>$this->input->post('email'),
             'department'=>$this->input->post('department'),
             'name'=>$this->input->post('name'),
             'hr_supr'=>$this->input->post('hr_supr'),
             'emp_number'=>$this->input->post('emp_number'),
             'emp_post'=>$this->input->post('emp_post'),
             'date_hired'=>$this->input->post('date_hired'),
             'emp_status'=>$this->input->post('emp_status'),
             'attendance'=>$this->input->post('attendance'),
             'job_knw_skill'=>$this->input->post('job_knw_skill'),
             'qua_work'=>$this->input->post('qua_work'),
             'invt_movt'=>$this->input->post('invt_movt'),
             'team_work'=>$this->input->post('team_work'),
             'gen_condt'=>$this->input->post('gen_condt'),
             'discipline'=>$this->input->post('discipline'),
             'tot_score'=>$this->input->post('tot_score'),
             'emp_comm'=>$this->input->post('emp_comm'),
             'comm_prf'=>$this->input->post('comm_prf'),
             'rev_date'=>$now,
             'rev_todate'=>$now,
             'rev_time'=>$time

          );
      
       $r = $this->db->insert('employee_rev',$data);
       $this->response($r);
    }
  }    


public function getEmpData_get(){
     $data = $this->db->get("employee_rev")->result();
        $this->response($data, REST_Controller::HTTP_OK);


// return $this->db->select('employee_prf.*,employee_rev.hr_supr, employee_rev.emp_number')->join('employee_rev','employee_rev.department = employee_prf.department')->get('employee_prf')->result(); 
     // $this->db->from('employee_prf');
     //   $this->db->join('employee_rev', 'employee_prf.department = employee_rev.department');

}

// public function getMyCart(){
// return $this->db->select('customer_cart.*,bag_size.bag_id,bag_size.bagsize,bag_size.price,saplings.sapling')->join('saplings','saplings.saplingid = customer_cart.sapling_id')->join('bag_size','bag_size.bag_id = customer_cart.bag_id')->get('customer_cart')->result();
// }

//----------------------------------Getting data in drop down and table---------------------------//
 public function fetchEmp1_post()
    {
        $pass=$this->input->post('name');
    
        $login_user_details=$this->db->where('name', $pass)->get('employee_rev');

        if($login_user_details->result()>0)
        {
        $login_user_detailssssss=$login_user_details->result();

        $r=$login_user_detailssssss;
        }
        else
        {
        $r='Failed';
        }

        $this->response($r);
    }

    public function fetchDateRng_post()
    {
        $password=$this->input->post('rev_date');
        $userid=$this->input->post('rev_todate');
        $pass=$this->input->post('name');

        $login_user_details=$this->db->where('name', $pass)->where('rev_date >=', $password)->where('rev_todate <=', $userid)->get('employee_rev');

        if($login_user_details->result()>0)
        {
        $login_user_detailssssss=$login_user_details->result();

        $r=$login_user_detailssssss;
        }
        else
        {
        $r='Failed';
        }

        $this->response($r);
    }


}
?>