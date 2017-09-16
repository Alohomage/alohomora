<?php namespace App\Transformer;

use League\Fractal\TransformerAbstract;

class UsersTransformer extends TransformerAbstract {

    public function transform($users) {
        return [
            'id' => $users->id,
            'username' => $users->username,
            'password' => $users->password
        ];
    }
}