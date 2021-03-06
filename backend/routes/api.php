<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['middleware' => ['cors']], function() {
    Route::get('users','UsersController@index');
    Route::get('users/{id}','UsersController@show');
    Route::post('authenticate','UserController@authenticate');

});

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::post('get', 'UserController@get');
});


// get list of tasks
// get specific task
// delete a task
//Route::delete('users/{id}','UsersController@destroy');
// update existing task
//Route::put('users','UsersController@store');
// create new task
//Route::post('users','UsersController@store');