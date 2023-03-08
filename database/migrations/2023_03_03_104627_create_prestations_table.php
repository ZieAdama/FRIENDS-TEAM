<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('prestations', function (Blueprint $table) {
            $table->id();
            $table->integer('photocopie')->nullable($value = 0);
            $table->integer('wifi')->nullable($value = 0);
            $table->integer('traitement_texte')->nullable($value = 0);
            $table->integer('reliure')->nullable($value = 0);
            $table->integer('impression')->nullable($value = 0);
            $table->integer('autres_prestations')->nullable($value = 0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prestations');
    }
};
