<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lesson extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'course_id',
        'content',
        'description',
        'time',
        'requirements'
    ];

    public function courses()
    {
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }

    public function documents()
    {
        return $this->hasMany(Document::class, 'lesson_id', 'id');
    }

    public function lessons()
    {
        return $this->belongsToMany(User::class, 'user_lesson', 'lesson_id', 'user_id');
    }
}