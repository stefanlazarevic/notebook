export default interface DriveProps {
    /**
     * Putanja foldera koji instanca Drive-a treba da pokazuje.
     * Ukoliko putanja nije navedena, koristiti cwd putanju iz Redux-a kao rezervnu vrednost.
     */
     path?: string;
}
