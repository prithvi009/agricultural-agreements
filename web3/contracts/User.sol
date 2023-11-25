// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract User {
    struct UserInfo {
        string walletAddress;
        string name;
        string email;
        uint userType; // 1 = farmer, 2 = buyer,
    }

    mapping(string => UserInfo) public users;

    constructor() {}

    function addUser(
        string memory walletAddress,
        string memory name,
        string memory email,
        uint userType
    ) public {
        require(users[walletAddress].userType == 0, "User already exists");
        users[walletAddress] = UserInfo({
            walletAddress: walletAddress,
            name: name,
            email: email,
            userType: userType
        });
    }

    function updateUser(
        string memory walletAddress,
        string memory name,
        string memory email,
        uint userType
    ) public {
        require(users[walletAddress].userType != 0, "User does not exist");

        users[walletAddress].name = name;
        users[walletAddress].email = email;
        users[walletAddress].userType = userType;
    }

    function deleteUser(string memory walletAddress) public {
        require(users[walletAddress].userType != 0, "User does not exist");

        delete users[walletAddress];
    }

    function getUserInfo(
        string memory walletAddress
    ) public view returns (UserInfo memory) {
        return users[walletAddress];
    }

    function isFarmer(string memory walletAddress) public view returns (bool) {
        return users[walletAddress].userType == 1;
    }

    function isBuyer(string memory walletAddress) public view returns (bool) {
        return users[walletAddress].userType == 2;
    }
}
