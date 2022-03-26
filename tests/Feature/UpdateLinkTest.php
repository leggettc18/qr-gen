<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\User;
use Tests\TestCase;

class UpdateLinkTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_UpdateLink()
    {
        $user = User::factory()->create();
        $this->actingAs($user)
                        ->postJson('/link', ['name' => 'Test Link', 'url' => 'https://example.com']);
        $response = $this->actingAs($user)
                        ->patchJson("/link/{$user->links()->first()->id}", ['name' => 'Updated Link', 'url' => 'https://updatedexample.com', 'user_id' => $user->id]);
        $this->assertTrue($user->links()->first()->name == 'Updated Link' && $user->links()->first()->url == 'https://updatedexample.com');
        $response->assertStatus(302);
        $response = $this->actingAs($user)
                        ->patchJson("/link/{$user->links()->first()->id}", ['name' => 'Updated Link', 'url' => 'https://updatedexample.com']);
        $response->assertStatus(403);
    }
}
