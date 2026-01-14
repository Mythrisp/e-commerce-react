const ProfileForm = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-red-500 font-semibold">Edit Your Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="First Name" className="bg-gray-100 p-3 rounded" />
        <input placeholder="Last Name" className="bg-gray-100 p-3 rounded" />
        <input placeholder="Email" className="bg-gray-100 p-3 rounded" />
        <input placeholder="Address" className="bg-gray-100 p-3 rounded" />
      </div>

      <div className="space-y-3">
        <input placeholder="Current Password" className="bg-gray-100 p-3 rounded w-full" />
        <input placeholder="New Password" className="bg-gray-100 p-3 rounded w-full" />
        <input placeholder="Confirm New Password" className="bg-gray-100 p-3 rounded w-full" />
      </div>

      <div className="flex justify-end gap-4">
        <button className="text-gray-500">Cancel</button>
        <button className="bg-red-500 text-white px-6 py-2 rounded">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
