<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'room_id' => $this->room_id,
            'from' => $this->from,
            'to' => $this->to,
            'body' => $this->body,
            'time' => $this->created_at->diffForHumans()
        ];
    }
}
