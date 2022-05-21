<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
// use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Validator;

class UpdateIssueRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // return false;
        return true;

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        // sometimes we update only part so we do validation at all
        return [
            'title'       => 'sometimes|required',
            'description' => 'sometimes',
            'place'       => 'sometimes',
            'status'      =>[
                                'sometimes',
                                'required',
                                Rule::in(['NEW','DOING','DONE']),
                            ]
        ];
    }
}
