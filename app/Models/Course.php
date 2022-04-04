<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'time',
        'price',
    ];

    public function teacherCourse()
    {
        return $this->belongsToMany(User::class, 'teacher_course', 'course_id', 'user_id');
    }

    public function userCourse()
    {
        return $this->belongsToMany(User::class, 'user_course', 'course_id', 'user_id');
    }
    public function courseTag()
    {
        return $this->belongsToMany(Tag::class, 'course_tag', 'course_id', 'tag_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'course_id', 'id');
    }

    public function lesson()
    {
        return $this->hasMany(Lesson::class, 'course_id', 'id');
    }
}