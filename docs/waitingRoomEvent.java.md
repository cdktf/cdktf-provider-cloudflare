# `waitingRoomEvent` Submodule <a name="`waitingRoomEvent` Submodule" id="@cdktf/provider-cloudflare.waitingRoomEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaitingRoomEvent <a name="WaitingRoomEvent" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event cloudflare_waiting_room_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room_event.WaitingRoomEvent;

WaitingRoomEvent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .eventEndTime(java.lang.String)
    .eventStartTime(java.lang.String)
    .name(java.lang.String)
    .waitingRoomId(java.lang.String)
    .zoneId(java.lang.String)
//  .customPageHtml(java.lang.String)
//  .description(java.lang.String)
//  .disableSessionRenewal(java.lang.Boolean)
//  .disableSessionRenewal(IResolvable)
//  .id(java.lang.String)
//  .newUsersPerMinute(java.lang.Number)
//  .prequeueStartTime(java.lang.String)
//  .queueingMethod(java.lang.String)
//  .sessionDuration(java.lang.Number)
//  .shuffleAtEventStart(java.lang.Boolean)
//  .shuffleAtEventStart(IResolvable)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .totalActiveUsers(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.eventEndTime">eventEndTime</a></code> | <code>java.lang.String</code> | ISO 8601 timestamp that marks the end of the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.eventStartTime">eventStartTime</a></code> | <code>java.lang.String</code> | ISO 8601 timestamp that marks the start of the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique name to identify the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.waitingRoomId">waitingRoomId</a></code> | <code>java.lang.String</code> | The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.customPageHtml">customPageHtml</a></code> | <code>java.lang.String</code> | This is a templated html file that will be rendered at the edge. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description to let users add more details about the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.disableSessionRenewal">disableSessionRenewal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables automatic renewal of session cookies. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#id WaitingRoomEvent#id}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.newUsersPerMinute">newUsersPerMinute</a></code> | <code>java.lang.Number</code> | The number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.prequeueStartTime">prequeueStartTime</a></code> | <code>java.lang.String</code> | ISO 8601 timestamp that marks when to begin queueing all users before the event starts. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.queueingMethod">queueingMethod</a></code> | <code>java.lang.String</code> | The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.sessionDuration">sessionDuration</a></code> | <code>java.lang.Number</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.shuffleAtEventStart">shuffleAtEventStart</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Users in the prequeue will be shuffled randomly at the `event_start_time`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If suspended, the event is ignored and traffic will be handled based on the waiting room configuration. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.totalActiveUsers">totalActiveUsers</a></code> | <code>java.lang.Number</code> | The total number of active user sessions on the route at a point in time. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventEndTime`<sup>Required</sup> <a name="eventEndTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.eventEndTime"></a>

- *Type:* java.lang.String

ISO 8601 timestamp that marks the end of the event.

**Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#event_end_time WaitingRoomEvent#event_end_time}

---

##### `eventStartTime`<sup>Required</sup> <a name="eventStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.eventStartTime"></a>

- *Type:* java.lang.String

ISO 8601 timestamp that marks the start of the event.

Must occur at least 1 minute before `event_end_time`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#event_start_time WaitingRoomEvent#event_start_time}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique name to identify the event.

Only alphanumeric characters, hyphens, and underscores are allowed. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#name WaitingRoomEvent#name}

---

##### `waitingRoomId`<sup>Required</sup> <a name="waitingRoomId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.waitingRoomId"></a>

- *Type:* java.lang.String

The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#waiting_room_id WaitingRoomEvent#waiting_room_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#zone_id WaitingRoomEvent#zone_id}

---

##### `customPageHtml`<sup>Optional</sup> <a name="customPageHtml" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.customPageHtml"></a>

- *Type:* java.lang.String

This is a templated html file that will be rendered at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#custom_page_html WaitingRoomEvent#custom_page_html}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description to let users add more details about the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#description WaitingRoomEvent#description}

---

##### `disableSessionRenewal`<sup>Optional</sup> <a name="disableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.disableSessionRenewal"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables automatic renewal of session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#disable_session_renewal WaitingRoomEvent#disable_session_renewal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#id WaitingRoomEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `newUsersPerMinute`<sup>Optional</sup> <a name="newUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.newUsersPerMinute"></a>

- *Type:* java.lang.Number

The number of new users that will be let into the route every minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#new_users_per_minute WaitingRoomEvent#new_users_per_minute}

---

##### `prequeueStartTime`<sup>Optional</sup> <a name="prequeueStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.prequeueStartTime"></a>

- *Type:* java.lang.String

ISO 8601 timestamp that marks when to begin queueing all users before the event starts.

Must occur at least 5 minutes before `event_start_time`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#prequeue_start_time WaitingRoomEvent#prequeue_start_time}

---

##### `queueingMethod`<sup>Optional</sup> <a name="queueingMethod" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.queueingMethod"></a>

- *Type:* java.lang.String

The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#queueing_method WaitingRoomEvent#queueing_method}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.sessionDuration"></a>

- *Type:* java.lang.Number

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#session_duration WaitingRoomEvent#session_duration}

---

##### `shuffleAtEventStart`<sup>Optional</sup> <a name="shuffleAtEventStart" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.shuffleAtEventStart"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Users in the prequeue will be shuffled randomly at the `event_start_time`.

Requires that `prequeue_start_time` is not null. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#shuffle_at_event_start WaitingRoomEvent#shuffle_at_event_start}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.suspended"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If suspended, the event is ignored and traffic will be handled based on the waiting room configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#suspended WaitingRoomEvent#suspended}

---

##### `totalActiveUsers`<sup>Optional</sup> <a name="totalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.totalActiveUsers"></a>

- *Type:* java.lang.Number

The total number of active user sessions on the route at a point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#total_active_users WaitingRoomEvent#total_active_users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetCustomPageHtml">resetCustomPageHtml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDisableSessionRenewal">resetDisableSessionRenewal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetNewUsersPerMinute">resetNewUsersPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetPrequeueStartTime">resetPrequeueStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetQueueingMethod">resetQueueingMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetShuffleAtEventStart">resetShuffleAtEventStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSuspended">resetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTotalActiveUsers">resetTotalActiveUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCustomPageHtml` <a name="resetCustomPageHtml" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetCustomPageHtml"></a>

```java
public void resetCustomPageHtml()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableSessionRenewal` <a name="resetDisableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDisableSessionRenewal"></a>

```java
public void resetDisableSessionRenewal()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetId"></a>

```java
public void resetId()
```

##### `resetNewUsersPerMinute` <a name="resetNewUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetNewUsersPerMinute"></a>

```java
public void resetNewUsersPerMinute()
```

##### `resetPrequeueStartTime` <a name="resetPrequeueStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetPrequeueStartTime"></a>

```java
public void resetPrequeueStartTime()
```

##### `resetQueueingMethod` <a name="resetQueueingMethod" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetQueueingMethod"></a>

```java
public void resetQueueingMethod()
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSessionDuration"></a>

```java
public void resetSessionDuration()
```

##### `resetShuffleAtEventStart` <a name="resetShuffleAtEventStart" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetShuffleAtEventStart"></a>

```java
public void resetShuffleAtEventStart()
```

##### `resetSuspended` <a name="resetSuspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSuspended"></a>

```java
public void resetSuspended()
```

##### `resetTotalActiveUsers` <a name="resetTotalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTotalActiveUsers"></a>

```java
public void resetTotalActiveUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WaitingRoomEvent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room_event.WaitingRoomEvent;

WaitingRoomEvent.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room_event.WaitingRoomEvent;

WaitingRoomEvent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room_event.WaitingRoomEvent;

WaitingRoomEvent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room_event.WaitingRoomEvent;

WaitingRoomEvent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WaitingRoomEvent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WaitingRoomEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WaitingRoomEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WaitingRoomEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WaitingRoomEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtmlInput">customPageHtmlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewalInput">disableSessionRenewalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTimeInput">eventEndTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTimeInput">eventStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinuteInput">newUsersPerMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTimeInput">prequeueStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethodInput">queueingMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDurationInput">sessionDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStartInput">shuffleAtEventStartInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspendedInput">suspendedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsersInput">totalActiveUsersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomIdInput">waitingRoomIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtml">customPageHtml</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewal">disableSessionRenewal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTime">eventEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTime">eventStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinute">newUsersPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTime">prequeueStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethod">queueingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStart">shuffleAtEventStart</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsers">totalActiveUsers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomId">waitingRoomId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `customPageHtmlInput`<sup>Optional</sup> <a name="customPageHtmlInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtmlInput"></a>

```java
public java.lang.String getCustomPageHtmlInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableSessionRenewalInput`<sup>Optional</sup> <a name="disableSessionRenewalInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewalInput"></a>

```java
public java.lang.Object getDisableSessionRenewalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventEndTimeInput`<sup>Optional</sup> <a name="eventEndTimeInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTimeInput"></a>

```java
public java.lang.String getEventEndTimeInput();
```

- *Type:* java.lang.String

---

##### `eventStartTimeInput`<sup>Optional</sup> <a name="eventStartTimeInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTimeInput"></a>

```java
public java.lang.String getEventStartTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `newUsersPerMinuteInput`<sup>Optional</sup> <a name="newUsersPerMinuteInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinuteInput"></a>

```java
public java.lang.Number getNewUsersPerMinuteInput();
```

- *Type:* java.lang.Number

---

##### `prequeueStartTimeInput`<sup>Optional</sup> <a name="prequeueStartTimeInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTimeInput"></a>

```java
public java.lang.String getPrequeueStartTimeInput();
```

- *Type:* java.lang.String

---

##### `queueingMethodInput`<sup>Optional</sup> <a name="queueingMethodInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethodInput"></a>

```java
public java.lang.String getQueueingMethodInput();
```

- *Type:* java.lang.String

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDurationInput"></a>

```java
public java.lang.Number getSessionDurationInput();
```

- *Type:* java.lang.Number

---

##### `shuffleAtEventStartInput`<sup>Optional</sup> <a name="shuffleAtEventStartInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStartInput"></a>

```java
public java.lang.Object getShuffleAtEventStartInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suspendedInput`<sup>Optional</sup> <a name="suspendedInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspendedInput"></a>

```java
public java.lang.Object getSuspendedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `totalActiveUsersInput`<sup>Optional</sup> <a name="totalActiveUsersInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsersInput"></a>

```java
public java.lang.Number getTotalActiveUsersInput();
```

- *Type:* java.lang.Number

---

##### `waitingRoomIdInput`<sup>Optional</sup> <a name="waitingRoomIdInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomIdInput"></a>

```java
public java.lang.String getWaitingRoomIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `customPageHtml`<sup>Required</sup> <a name="customPageHtml" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtml"></a>

```java
public java.lang.String getCustomPageHtml();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableSessionRenewal`<sup>Required</sup> <a name="disableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewal"></a>

```java
public java.lang.Object getDisableSessionRenewal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventEndTime`<sup>Required</sup> <a name="eventEndTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTime"></a>

```java
public java.lang.String getEventEndTime();
```

- *Type:* java.lang.String

---

##### `eventStartTime`<sup>Required</sup> <a name="eventStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTime"></a>

```java
public java.lang.String getEventStartTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `newUsersPerMinute`<sup>Required</sup> <a name="newUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinute"></a>

```java
public java.lang.Number getNewUsersPerMinute();
```

- *Type:* java.lang.Number

---

##### `prequeueStartTime`<sup>Required</sup> <a name="prequeueStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTime"></a>

```java
public java.lang.String getPrequeueStartTime();
```

- *Type:* java.lang.String

---

##### `queueingMethod`<sup>Required</sup> <a name="queueingMethod" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethod"></a>

```java
public java.lang.String getQueueingMethod();
```

- *Type:* java.lang.String

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDuration"></a>

```java
public java.lang.Number getSessionDuration();
```

- *Type:* java.lang.Number

---

##### `shuffleAtEventStart`<sup>Required</sup> <a name="shuffleAtEventStart" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStart"></a>

```java
public java.lang.Object getShuffleAtEventStart();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `totalActiveUsers`<sup>Required</sup> <a name="totalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsers"></a>

```java
public java.lang.Number getTotalActiveUsers();
```

- *Type:* java.lang.Number

---

##### `waitingRoomId`<sup>Required</sup> <a name="waitingRoomId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomId"></a>

```java
public java.lang.String getWaitingRoomId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WaitingRoomEventConfig <a name="WaitingRoomEventConfig" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room_event.WaitingRoomEventConfig;

WaitingRoomEventConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .eventEndTime(java.lang.String)
    .eventStartTime(java.lang.String)
    .name(java.lang.String)
    .waitingRoomId(java.lang.String)
    .zoneId(java.lang.String)
//  .customPageHtml(java.lang.String)
//  .description(java.lang.String)
//  .disableSessionRenewal(java.lang.Boolean)
//  .disableSessionRenewal(IResolvable)
//  .id(java.lang.String)
//  .newUsersPerMinute(java.lang.Number)
//  .prequeueStartTime(java.lang.String)
//  .queueingMethod(java.lang.String)
//  .sessionDuration(java.lang.Number)
//  .shuffleAtEventStart(java.lang.Boolean)
//  .shuffleAtEventStart(IResolvable)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .totalActiveUsers(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventEndTime">eventEndTime</a></code> | <code>java.lang.String</code> | ISO 8601 timestamp that marks the end of the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventStartTime">eventStartTime</a></code> | <code>java.lang.String</code> | ISO 8601 timestamp that marks the start of the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique name to identify the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.waitingRoomId">waitingRoomId</a></code> | <code>java.lang.String</code> | The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.customPageHtml">customPageHtml</a></code> | <code>java.lang.String</code> | This is a templated html file that will be rendered at the edge. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description to let users add more details about the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.disableSessionRenewal">disableSessionRenewal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables automatic renewal of session cookies. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#id WaitingRoomEvent#id}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.newUsersPerMinute">newUsersPerMinute</a></code> | <code>java.lang.Number</code> | The number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.prequeueStartTime">prequeueStartTime</a></code> | <code>java.lang.String</code> | ISO 8601 timestamp that marks when to begin queueing all users before the event starts. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.queueingMethod">queueingMethod</a></code> | <code>java.lang.String</code> | The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.Number</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.shuffleAtEventStart">shuffleAtEventStart</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Users in the prequeue will be shuffled randomly at the `event_start_time`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If suspended, the event is ignored and traffic will be handled based on the waiting room configuration. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.totalActiveUsers">totalActiveUsers</a></code> | <code>java.lang.Number</code> | The total number of active user sessions on the route at a point in time. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventEndTime`<sup>Required</sup> <a name="eventEndTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventEndTime"></a>

```java
public java.lang.String getEventEndTime();
```

- *Type:* java.lang.String

ISO 8601 timestamp that marks the end of the event.

**Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#event_end_time WaitingRoomEvent#event_end_time}

---

##### `eventStartTime`<sup>Required</sup> <a name="eventStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventStartTime"></a>

```java
public java.lang.String getEventStartTime();
```

- *Type:* java.lang.String

ISO 8601 timestamp that marks the start of the event.

Must occur at least 1 minute before `event_end_time`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#event_start_time WaitingRoomEvent#event_start_time}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique name to identify the event.

Only alphanumeric characters, hyphens, and underscores are allowed. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#name WaitingRoomEvent#name}

---

##### `waitingRoomId`<sup>Required</sup> <a name="waitingRoomId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.waitingRoomId"></a>

```java
public java.lang.String getWaitingRoomId();
```

- *Type:* java.lang.String

The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#waiting_room_id WaitingRoomEvent#waiting_room_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#zone_id WaitingRoomEvent#zone_id}

---

##### `customPageHtml`<sup>Optional</sup> <a name="customPageHtml" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.customPageHtml"></a>

```java
public java.lang.String getCustomPageHtml();
```

- *Type:* java.lang.String

This is a templated html file that will be rendered at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#custom_page_html WaitingRoomEvent#custom_page_html}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description to let users add more details about the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#description WaitingRoomEvent#description}

---

##### `disableSessionRenewal`<sup>Optional</sup> <a name="disableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.disableSessionRenewal"></a>

```java
public java.lang.Object getDisableSessionRenewal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables automatic renewal of session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#disable_session_renewal WaitingRoomEvent#disable_session_renewal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#id WaitingRoomEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `newUsersPerMinute`<sup>Optional</sup> <a name="newUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.newUsersPerMinute"></a>

```java
public java.lang.Number getNewUsersPerMinute();
```

- *Type:* java.lang.Number

The number of new users that will be let into the route every minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#new_users_per_minute WaitingRoomEvent#new_users_per_minute}

---

##### `prequeueStartTime`<sup>Optional</sup> <a name="prequeueStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.prequeueStartTime"></a>

```java
public java.lang.String getPrequeueStartTime();
```

- *Type:* java.lang.String

ISO 8601 timestamp that marks when to begin queueing all users before the event starts.

Must occur at least 5 minutes before `event_start_time`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#prequeue_start_time WaitingRoomEvent#prequeue_start_time}

---

##### `queueingMethod`<sup>Optional</sup> <a name="queueingMethod" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.queueingMethod"></a>

```java
public java.lang.String getQueueingMethod();
```

- *Type:* java.lang.String

The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#queueing_method WaitingRoomEvent#queueing_method}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.sessionDuration"></a>

```java
public java.lang.Number getSessionDuration();
```

- *Type:* java.lang.Number

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#session_duration WaitingRoomEvent#session_duration}

---

##### `shuffleAtEventStart`<sup>Optional</sup> <a name="shuffleAtEventStart" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.shuffleAtEventStart"></a>

```java
public java.lang.Object getShuffleAtEventStart();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Users in the prequeue will be shuffled randomly at the `event_start_time`.

Requires that `prequeue_start_time` is not null. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#shuffle_at_event_start WaitingRoomEvent#shuffle_at_event_start}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If suspended, the event is ignored and traffic will be handled based on the waiting room configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#suspended WaitingRoomEvent#suspended}

---

##### `totalActiveUsers`<sup>Optional</sup> <a name="totalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.totalActiveUsers"></a>

```java
public java.lang.Number getTotalActiveUsers();
```

- *Type:* java.lang.Number

The total number of active user sessions on the route at a point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/waiting_room_event#total_active_users WaitingRoomEvent#total_active_users}

---



