<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiResource;
// use ApiPlatform\Metadata\Get;
// use ApiPlatform\Metadata\Patch;
// use ApiPlatform\Metadata\Post;
// use ApiPlatform\Metadata\GetCollection;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ApiResource(
    // operations: [
    //     new Get(),
    //     new GetCollection(),
    //     new Post(),
    //     new Patch()
    // ],
    normalizationContext: ['groups' => ['read:User']],
    denormalizationContext: ['groups' => ['write:User']],
)]
#[ApiFilter(
    SearchFilter::class, properties: ['username' => 'partial'])
]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:User'])]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    #[Groups(['read:User', 'write:User'])]
    private ?string $username = null;

    #[ORM\Column]
    #[Groups(['read:User'])]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    #[Groups(['write:User'])]
    private ?string $password = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: UserCities::class)]
    // #[Groups(['read:User'])]
    private Collection $userCities;

    public function __construct()
    {
        $this->userCities = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @return Collection<int, UserCities>
     */
    public function getUserCities(): Collection
    {
        return $this->userCities;
    }

    public function addUserCity(UserCities $userCity): self
    {
        if (!$this->userCities->contains($userCity)) {
            $this->userCities->add($userCity);
            $userCity->setUser($this);
        }

        return $this;
    }

    public function removeUserCity(UserCities $userCity): self
    {
        if ($this->userCities->removeElement($userCity)) {
            // set the owning side to null (unless already changed)
            if ($userCity->getUser() === $this) {
                $userCity->setUser(null);
            }
        }

        return $this;
    }
}
