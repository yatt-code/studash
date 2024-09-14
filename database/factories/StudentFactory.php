<?php

namespace Database\Factories;


use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    protected $model = Student::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'department' => $this->faker->randomElement(['Biology', 'Mathematics', 'Physics', 'Art']),
            'email' => $this->faker->unique()->safeEmail,
            
        ];
    }
}
