import test from '@interactjs/_dev/test/test';
import * as helpers from './tests/_helpers';
test('scope', (t) => {
    const { scope, interactable, interaction, event, } = helpers.testEnv();
    interactable.options.test = { enabled: true };
    interaction.pointerDown(event, event, scope.document.body);
    interaction.start({ name: 'test' }, interactable, scope.document.body);
    const started = interaction._interacting;
    interactable.unset();
    const stopped = !interaction._interacting;
    t.ok(started && stopped, 'interaction is stopped on interactable.unset()');
    t.end();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjb3BlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFJLE1BQU0sNEJBQTRCLENBQUE7QUFDN0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxrQkFBa0IsQ0FBQTtBQUUzQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDbEIsTUFBTSxFQUNKLEtBQUssRUFDTCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssR0FDTixHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUVyQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQTtJQUU3QyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMxRCxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRXRFLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUE7SUFFeEMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBRXBCLE1BQU0sT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQTtJQUV6QyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLEVBQUUsZ0RBQWdELENBQUMsQ0FBQTtJQUUxRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0ZXN0IGZyb20gJ0BpbnRlcmFjdGpzL19kZXYvdGVzdC90ZXN0J1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuL3Rlc3RzL19oZWxwZXJzJ1xuXG50ZXN0KCdzY29wZScsICh0KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzY29wZSxcbiAgICBpbnRlcmFjdGFibGUsXG4gICAgaW50ZXJhY3Rpb24sXG4gICAgZXZlbnQsXG4gIH0gPSBoZWxwZXJzLnRlc3RFbnYoKVxuXG4gIGludGVyYWN0YWJsZS5vcHRpb25zLnRlc3QgPSB7IGVuYWJsZWQ6IHRydWUgfVxuXG4gIGludGVyYWN0aW9uLnBvaW50ZXJEb3duKGV2ZW50LCBldmVudCwgc2NvcGUuZG9jdW1lbnQuYm9keSlcbiAgaW50ZXJhY3Rpb24uc3RhcnQoeyBuYW1lOiAndGVzdCcgfSwgaW50ZXJhY3RhYmxlLCBzY29wZS5kb2N1bWVudC5ib2R5KVxuXG4gIGNvbnN0IHN0YXJ0ZWQgPSBpbnRlcmFjdGlvbi5faW50ZXJhY3RpbmdcblxuICBpbnRlcmFjdGFibGUudW5zZXQoKVxuXG4gIGNvbnN0IHN0b3BwZWQgPSAhaW50ZXJhY3Rpb24uX2ludGVyYWN0aW5nXG5cbiAgdC5vayhzdGFydGVkICYmIHN0b3BwZWQsICdpbnRlcmFjdGlvbiBpcyBzdG9wcGVkIG9uIGludGVyYWN0YWJsZS51bnNldCgpJylcblxuICB0LmVuZCgpXG59KVxuIl19