<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use EllipseSynergie\ApiResponse\Contracts\Response;
use App\User;
use App\Transformer\UsersTransformer;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    protected $response;

    public function __construct(Response $response)
    {
        $this->response = $response;
    }

    public function index()
    {
        //Get all task
        $users = Users::paginate(15);
        // Return a collection of $task with pagination
        return $this->response->withPaginator($users, new  UsersTransformer());
    }

    public function authenticate(Request $request)
    {
        //PASSWORD USER
        //Hash::make('password');
        $credentials = $request->only('email', 'password');
        $token = null;
        try {
            $user = User::first();
            //$token = JWTAuth::fromUser($user);
            //return $token;
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['invalid_email_or_password'], 422);
            }
        } catch (JWTAuthException $e) {
            return response()->json(['failed_to_create_token'], 500);
        }
        return response()->json(compact('token'));
    }


    public function show($id)
    {
        //Get the task
        $task = Users::find($id);
        if (!$task) {
            return $this->response->errorNotFound('Task Not Found');
        }
        // Return a single task
        return $this->response->withItem($task, new  UsersTransformer());
    }

    public function get($id)
    {
        //Get the task
        $task = User::find($id);
        if (!$task) {
            return $this->response->errorNotFound('Task Not Found');
        }
        // Return a single task
        return $this->response->withItem($task, new  UsersTransformer());
    }

    public function destroy($id)
    {
        //Get the task
        $task = Users::find($id);
        if (!$task) {
            return $this->response->errorNotFound('Task Not Found');
        }

        if($task->delete()) {
            return $this->response->withItem($task, new  UsersTransformer());
        } else {
            return $this->response->errorInternalError('Could not delete a task');
        }

    }

    public function store(Request $request)  {
        if ($request->isMethod('put')) {
            //Get the task
            $task = Users::find($request->task_id);
            if (!$task) {
                return $this->response->errorNotFound('Task Not Found');
            }
        } else {
            $task = new Users;
        }

        $task->id = $request->input('task_id');
        $task->name = $request->input('name');
        $task->description = $request->input('description');
        $task->user_id =  1; //$request->user()->id;

        if($task->save()) {
            return $this->response->withItem($task, new  UsersTransformer());
        } else {
            return $this->response->errorInternalError('Could not updated/created a task');
        }

    }


}
