<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\User;
use App\Models\Link;
use Tests\TestCase;

class LinkTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testStoreLinks()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)
                         ->postJson('/link', ['name' => 'Test Link', 'url' => 'https://example.com']);
        $this->assertTrue($user->links()->count() == 1);
    }
}
