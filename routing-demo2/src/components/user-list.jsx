"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const UserCard = ({ user, index }) => {
  return (
    <motion.li
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
      }}
      className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-100 border border-gray-200 text-gray-800"
    >
      <h2 className="text-xl font-bold mb-2">{user?.name}</h2>

      <div className="text-sm space-y-1">
        <p><span className="font-semibold">Username:</span> {user?.username}</p>
        <p><span className="font-semibold">Email:</span> {user?.email}</p>
        <p><span className="font-semibold">Phone:</span> {user?.phone}</p>
      </div>
    </motion.li>
  );
};

const UserList = ({ users }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-10">
      <motion.ul className="space-y-5 p-4 max-w-2xl mx-auto">
        {users?.map((user, index) => (
          <UserCard key={user.id} user={user} index={index} />
        ))}
      </motion.ul>
    </div>
  );
};

export default UserList;