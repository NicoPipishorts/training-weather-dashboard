<?php

namespace App\Entity;

use App\Repository\ExempleRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ExempleRepository::class)]
class Exemple
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $testExemple = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTestExemple(): ?string
    {
        return $this->testExemple;
    }

    public function setTestExemple(string $testExemple): self
    {
        $this->testExemple = $testExemple;

        return $this;
    }
}
