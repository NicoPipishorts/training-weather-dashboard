<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\UserCitiesRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserCitiesRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
    ],
    normalizationContext: ['groups' => 
        ['read:UserCities', 'write:UserCities']
    ],
)]
#[ApiFilter(
    SearchFilter::class, properties: ['user' => 'exact'])
]
class UserCities
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'userCities')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['read:UserCities'])]
    private ?User $user = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:UserCities', 'read:User'])]
    private ?string $latitude = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:UserCities', 'read:User'])]
    private ?string $longitude = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['read:UserCities'])]
    private ?\DateTimeInterface $dateAdded = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function setLatitude(string $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(string $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getDateAdded(): ?\DateTimeInterface
    {
        return $this->dateAdded;
    }

    public function setDateAdded(\DateTimeInterface $dateAdded): self
    {
        $this->dateAdded = $dateAdded;

        return $this;
    }
}
