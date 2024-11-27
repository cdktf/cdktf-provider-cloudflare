# `waitingRoom` Submodule <a name="`waitingRoom` Submodule" id="@cdktf/provider-cloudflare.waitingRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaitingRoom <a name="WaitingRoom" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room cloudflare_waiting_room}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room.WaitingRoom;

WaitingRoom.Builder.create(Construct scope, java.lang.String id)
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
    .host(java.lang.String)
    .name(java.lang.String)
    .newUsersPerMinute(java.lang.Number)
    .totalActiveUsers(java.lang.Number)
    .zoneId(java.lang.String)
//  .additionalRoutes(IResolvable)
//  .additionalRoutes(java.util.List<WaitingRoomAdditionalRoutes>)
//  .cookieSuffix(java.lang.String)
//  .customPageHtml(java.lang.String)
//  .defaultTemplateLanguage(java.lang.String)
//  .description(java.lang.String)
//  .disableSessionRenewal(java.lang.Boolean)
//  .disableSessionRenewal(IResolvable)
//  .enabledOriginCommands(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .jsonResponseEnabled(java.lang.Boolean)
//  .jsonResponseEnabled(IResolvable)
//  .path(java.lang.String)
//  .queueAll(java.lang.Boolean)
//  .queueAll(IResolvable)
//  .queueingMethod(java.lang.String)
//  .queueingStatusCode(java.lang.Number)
//  .sessionDuration(java.lang.Number)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .timeouts(WaitingRoomTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | Host name for which the waiting room will be applied (no wildcards). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique name to identify the waiting room. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.newUsersPerMinute">newUsersPerMinute</a></code> | <code>java.lang.Number</code> | The number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.totalActiveUsers">totalActiveUsers</a></code> | <code>java.lang.Number</code> | The total number of active user sessions on the route at a point in time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.additionalRoutes">additionalRoutes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>></code> | additional_routes block. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.cookieSuffix">cookieSuffix</a></code> | <code>java.lang.String</code> | A cookie suffix to be appended to the Cloudflare waiting room cookie name. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.customPageHtml">customPageHtml</a></code> | <code>java.lang.String</code> | This is a templated html file that will be rendered at the edge. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.defaultTemplateLanguage">defaultTemplateLanguage</a></code> | <code>java.lang.String</code> | The language to use for the default waiting room page. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description to add more details about the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.disableSessionRenewal">disableSessionRenewal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables automatic renewal of session cookies. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.enabledOriginCommands">enabledOriginCommands</a></code> | <code>java.util.List<java.lang.String></code> | The list of enabled origin commands for the waiting room. Available values: `revoke`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#id WaitingRoom#id}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.jsonResponseEnabled">jsonResponseEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The path within the host to enable the waiting room on. Defaults to `/`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueAll">queueAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If queue_all is true, then all traffic will be sent to the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueingMethod">queueingMethod</a></code> | <code>java.lang.String</code> | The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. Defaults to `fifo`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueingStatusCode">queueingStatusCode</a></code> | <code>java.lang.Number</code> | HTTP status code returned to a user while in the queue. Defaults to `200`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.sessionDuration">sessionDuration</a></code> | <code>java.lang.Number</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Suspends the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.host"></a>

- *Type:* java.lang.String

Host name for which the waiting room will be applied (no wildcards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#host WaitingRoom#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique name to identify the waiting room. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#name WaitingRoom#name}

---

##### `newUsersPerMinute`<sup>Required</sup> <a name="newUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.newUsersPerMinute"></a>

- *Type:* java.lang.Number

The number of new users that will be let into the route every minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#new_users_per_minute WaitingRoom#new_users_per_minute}

---

##### `totalActiveUsers`<sup>Required</sup> <a name="totalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.totalActiveUsers"></a>

- *Type:* java.lang.Number

The total number of active user sessions on the route at a point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#total_active_users WaitingRoom#total_active_users}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#zone_id WaitingRoom#zone_id}

---

##### `additionalRoutes`<sup>Optional</sup> <a name="additionalRoutes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.additionalRoutes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>>

additional_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#additional_routes WaitingRoom#additional_routes}

---

##### `cookieSuffix`<sup>Optional</sup> <a name="cookieSuffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.cookieSuffix"></a>

- *Type:* java.lang.String

A cookie suffix to be appended to the Cloudflare waiting room cookie name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#cookie_suffix WaitingRoom#cookie_suffix}

---

##### `customPageHtml`<sup>Optional</sup> <a name="customPageHtml" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.customPageHtml"></a>

- *Type:* java.lang.String

This is a templated html file that will be rendered at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#custom_page_html WaitingRoom#custom_page_html}

---

##### `defaultTemplateLanguage`<sup>Optional</sup> <a name="defaultTemplateLanguage" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.defaultTemplateLanguage"></a>

- *Type:* java.lang.String

The language to use for the default waiting room page.

Available values: `de-DE`, `es-ES`, `en-US`, `fr-FR`, `id-ID`, `it-IT`, `ja-JP`, `ko-KR`, `nl-NL`, `pl-PL`, `pt-BR`, `tr-TR`, `zh-CN`, `zh-TW`, `ru-RU`, `fa-IR`, `bg-BG`, `hr-HR`, `cs-CZ`, `da-DK`, `fi-FI`, `lt-LT`, `ms-MY`, `nb-NO`, `ro-RO`, `el-GR`, `he-IL`, `hi-IN`, `hu-HU`, `sr-BA`, `sk-SK`, `sl-SI`, `sv-SE`, `tl-PH`, `th-TH`, `uk-UA`, `vi-VN`. Defaults to `en-US`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#default_template_language WaitingRoom#default_template_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description to add more details about the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#description WaitingRoom#description}

---

##### `disableSessionRenewal`<sup>Optional</sup> <a name="disableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.disableSessionRenewal"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables automatic renewal of session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#disable_session_renewal WaitingRoom#disable_session_renewal}

---

##### `enabledOriginCommands`<sup>Optional</sup> <a name="enabledOriginCommands" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.enabledOriginCommands"></a>

- *Type:* java.util.List<java.lang.String>

The list of enabled origin commands for the waiting room. Available values: `revoke`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#enabled_origin_commands WaitingRoom#enabled_origin_commands}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#id WaitingRoom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jsonResponseEnabled`<sup>Optional</sup> <a name="jsonResponseEnabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.jsonResponseEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#json_response_enabled WaitingRoom#json_response_enabled}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The path within the host to enable the waiting room on. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#path WaitingRoom#path}

---

##### `queueAll`<sup>Optional</sup> <a name="queueAll" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueAll"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If queue_all is true, then all traffic will be sent to the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#queue_all WaitingRoom#queue_all}

---

##### `queueingMethod`<sup>Optional</sup> <a name="queueingMethod" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueingMethod"></a>

- *Type:* java.lang.String

The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. Defaults to `fifo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#queueing_method WaitingRoom#queueing_method}

---

##### `queueingStatusCode`<sup>Optional</sup> <a name="queueingStatusCode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueingStatusCode"></a>

- *Type:* java.lang.Number

HTTP status code returned to a user while in the queue. Defaults to `200`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#queueing_status_code WaitingRoom#queueing_status_code}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.sessionDuration"></a>

- *Type:* java.lang.Number

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin.

Defaults to `5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#session_duration WaitingRoom#session_duration}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.suspended"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Suspends the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#suspended WaitingRoom#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#timeouts WaitingRoom#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putAdditionalRoutes">putAdditionalRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetAdditionalRoutes">resetAdditionalRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCookieSuffix">resetCookieSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCustomPageHtml">resetCustomPageHtml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDefaultTemplateLanguage">resetDefaultTemplateLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDisableSessionRenewal">resetDisableSessionRenewal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetEnabledOriginCommands">resetEnabledOriginCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetJsonResponseEnabled">resetJsonResponseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueAll">resetQueueAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingMethod">resetQueueingMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingStatusCode">resetQueueingStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSuspended">resetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalRoutes` <a name="putAdditionalRoutes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putAdditionalRoutes"></a>

```java
public void putAdditionalRoutes(IResolvable OR java.util.List<WaitingRoomAdditionalRoutes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putAdditionalRoutes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putTimeouts"></a>

```java
public void putTimeouts(WaitingRoomTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>

---

##### `resetAdditionalRoutes` <a name="resetAdditionalRoutes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetAdditionalRoutes"></a>

```java
public void resetAdditionalRoutes()
```

##### `resetCookieSuffix` <a name="resetCookieSuffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCookieSuffix"></a>

```java
public void resetCookieSuffix()
```

##### `resetCustomPageHtml` <a name="resetCustomPageHtml" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCustomPageHtml"></a>

```java
public void resetCustomPageHtml()
```

##### `resetDefaultTemplateLanguage` <a name="resetDefaultTemplateLanguage" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDefaultTemplateLanguage"></a>

```java
public void resetDefaultTemplateLanguage()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableSessionRenewal` <a name="resetDisableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDisableSessionRenewal"></a>

```java
public void resetDisableSessionRenewal()
```

##### `resetEnabledOriginCommands` <a name="resetEnabledOriginCommands" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetEnabledOriginCommands"></a>

```java
public void resetEnabledOriginCommands()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetId"></a>

```java
public void resetId()
```

##### `resetJsonResponseEnabled` <a name="resetJsonResponseEnabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetJsonResponseEnabled"></a>

```java
public void resetJsonResponseEnabled()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetPath"></a>

```java
public void resetPath()
```

##### `resetQueueAll` <a name="resetQueueAll" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueAll"></a>

```java
public void resetQueueAll()
```

##### `resetQueueingMethod` <a name="resetQueueingMethod" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingMethod"></a>

```java
public void resetQueueingMethod()
```

##### `resetQueueingStatusCode` <a name="resetQueueingStatusCode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingStatusCode"></a>

```java
public void resetQueueingStatusCode()
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSessionDuration"></a>

```java
public void resetSessionDuration()
```

##### `resetSuspended` <a name="resetSuspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSuspended"></a>

```java
public void resetSuspended()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WaitingRoom resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room.WaitingRoom;

WaitingRoom.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room.WaitingRoom;

WaitingRoom.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room.WaitingRoom;

WaitingRoom.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room.WaitingRoom;

WaitingRoom.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WaitingRoom.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WaitingRoom resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WaitingRoom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WaitingRoom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WaitingRoom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutes">additionalRoutes</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList">WaitingRoomAdditionalRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference">WaitingRoomTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutesInput">additionalRoutesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffixInput">cookieSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtmlInput">customPageHtmlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguageInput">defaultTemplateLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewalInput">disableSessionRenewalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.enabledOriginCommandsInput">enabledOriginCommandsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabledInput">jsonResponseEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinuteInput">newUsersPerMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAllInput">queueAllInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethodInput">queueingMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCodeInput">queueingStatusCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDurationInput">sessionDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspendedInput">suspendedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsersInput">totalActiveUsersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffix">cookieSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtml">customPageHtml</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguage">defaultTemplateLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewal">disableSessionRenewal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.enabledOriginCommands">enabledOriginCommands</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabled">jsonResponseEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinute">newUsersPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAll">queueAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethod">queueingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCode">queueingStatusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsers">totalActiveUsers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalRoutes`<sup>Required</sup> <a name="additionalRoutes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutes"></a>

```java
public WaitingRoomAdditionalRoutesList getAdditionalRoutes();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList">WaitingRoomAdditionalRoutesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.timeouts"></a>

```java
public WaitingRoomTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference">WaitingRoomTimeoutsOutputReference</a>

---

##### `additionalRoutesInput`<sup>Optional</sup> <a name="additionalRoutesInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutesInput"></a>

```java
public java.lang.Object getAdditionalRoutesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>>

---

##### `cookieSuffixInput`<sup>Optional</sup> <a name="cookieSuffixInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffixInput"></a>

```java
public java.lang.String getCookieSuffixInput();
```

- *Type:* java.lang.String

---

##### `customPageHtmlInput`<sup>Optional</sup> <a name="customPageHtmlInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtmlInput"></a>

```java
public java.lang.String getCustomPageHtmlInput();
```

- *Type:* java.lang.String

---

##### `defaultTemplateLanguageInput`<sup>Optional</sup> <a name="defaultTemplateLanguageInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguageInput"></a>

```java
public java.lang.String getDefaultTemplateLanguageInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableSessionRenewalInput`<sup>Optional</sup> <a name="disableSessionRenewalInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewalInput"></a>

```java
public java.lang.Object getDisableSessionRenewalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledOriginCommandsInput`<sup>Optional</sup> <a name="enabledOriginCommandsInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.enabledOriginCommandsInput"></a>

```java
public java.util.List<java.lang.String> getEnabledOriginCommandsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jsonResponseEnabledInput`<sup>Optional</sup> <a name="jsonResponseEnabledInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabledInput"></a>

```java
public java.lang.Object getJsonResponseEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `newUsersPerMinuteInput`<sup>Optional</sup> <a name="newUsersPerMinuteInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinuteInput"></a>

```java
public java.lang.Number getNewUsersPerMinuteInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `queueAllInput`<sup>Optional</sup> <a name="queueAllInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAllInput"></a>

```java
public java.lang.Object getQueueAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queueingMethodInput`<sup>Optional</sup> <a name="queueingMethodInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethodInput"></a>

```java
public java.lang.String getQueueingMethodInput();
```

- *Type:* java.lang.String

---

##### `queueingStatusCodeInput`<sup>Optional</sup> <a name="queueingStatusCodeInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCodeInput"></a>

```java
public java.lang.Number getQueueingStatusCodeInput();
```

- *Type:* java.lang.Number

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDurationInput"></a>

```java
public java.lang.Number getSessionDurationInput();
```

- *Type:* java.lang.Number

---

##### `suspendedInput`<sup>Optional</sup> <a name="suspendedInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspendedInput"></a>

```java
public java.lang.Object getSuspendedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>

---

##### `totalActiveUsersInput`<sup>Optional</sup> <a name="totalActiveUsersInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsersInput"></a>

```java
public java.lang.Number getTotalActiveUsersInput();
```

- *Type:* java.lang.Number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `cookieSuffix`<sup>Required</sup> <a name="cookieSuffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffix"></a>

```java
public java.lang.String getCookieSuffix();
```

- *Type:* java.lang.String

---

##### `customPageHtml`<sup>Required</sup> <a name="customPageHtml" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtml"></a>

```java
public java.lang.String getCustomPageHtml();
```

- *Type:* java.lang.String

---

##### `defaultTemplateLanguage`<sup>Required</sup> <a name="defaultTemplateLanguage" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguage"></a>

```java
public java.lang.String getDefaultTemplateLanguage();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableSessionRenewal`<sup>Required</sup> <a name="disableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewal"></a>

```java
public java.lang.Object getDisableSessionRenewal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledOriginCommands`<sup>Required</sup> <a name="enabledOriginCommands" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.enabledOriginCommands"></a>

```java
public java.util.List<java.lang.String> getEnabledOriginCommands();
```

- *Type:* java.util.List<java.lang.String>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jsonResponseEnabled`<sup>Required</sup> <a name="jsonResponseEnabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabled"></a>

```java
public java.lang.Object getJsonResponseEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `newUsersPerMinute`<sup>Required</sup> <a name="newUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinute"></a>

```java
public java.lang.Number getNewUsersPerMinute();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `queueAll`<sup>Required</sup> <a name="queueAll" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAll"></a>

```java
public java.lang.Object getQueueAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queueingMethod`<sup>Required</sup> <a name="queueingMethod" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethod"></a>

```java
public java.lang.String getQueueingMethod();
```

- *Type:* java.lang.String

---

##### `queueingStatusCode`<sup>Required</sup> <a name="queueingStatusCode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCode"></a>

```java
public java.lang.Number getQueueingStatusCode();
```

- *Type:* java.lang.Number

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDuration"></a>

```java
public java.lang.Number getSessionDuration();
```

- *Type:* java.lang.Number

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `totalActiveUsers`<sup>Required</sup> <a name="totalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsers"></a>

```java
public java.lang.Number getTotalActiveUsers();
```

- *Type:* java.lang.Number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WaitingRoomAdditionalRoutes <a name="WaitingRoomAdditionalRoutes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room.WaitingRoomAdditionalRoutes;

WaitingRoomAdditionalRoutes.builder()
    .host(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.host">host</a></code> | <code>java.lang.String</code> | The additional host name for which the waiting room to be applied on (no wildcards). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.path">path</a></code> | <code>java.lang.String</code> | The path within the additional host to enable the waiting room on. Defaults to `/`. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The additional host name for which the waiting room to be applied on (no wildcards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#host WaitingRoom#host}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path within the additional host to enable the waiting room on. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#path WaitingRoom#path}

---

### WaitingRoomConfig <a name="WaitingRoomConfig" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room.WaitingRoomConfig;

WaitingRoomConfig.builder()
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
    .host(java.lang.String)
    .name(java.lang.String)
    .newUsersPerMinute(java.lang.Number)
    .totalActiveUsers(java.lang.Number)
    .zoneId(java.lang.String)
//  .additionalRoutes(IResolvable)
//  .additionalRoutes(java.util.List<WaitingRoomAdditionalRoutes>)
//  .cookieSuffix(java.lang.String)
//  .customPageHtml(java.lang.String)
//  .defaultTemplateLanguage(java.lang.String)
//  .description(java.lang.String)
//  .disableSessionRenewal(java.lang.Boolean)
//  .disableSessionRenewal(IResolvable)
//  .enabledOriginCommands(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .jsonResponseEnabled(java.lang.Boolean)
//  .jsonResponseEnabled(IResolvable)
//  .path(java.lang.String)
//  .queueAll(java.lang.Boolean)
//  .queueAll(IResolvable)
//  .queueingMethod(java.lang.String)
//  .queueingStatusCode(java.lang.Number)
//  .sessionDuration(java.lang.Number)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .timeouts(WaitingRoomTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.host">host</a></code> | <code>java.lang.String</code> | Host name for which the waiting room will be applied (no wildcards). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique name to identify the waiting room. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.newUsersPerMinute">newUsersPerMinute</a></code> | <code>java.lang.Number</code> | The number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.totalActiveUsers">totalActiveUsers</a></code> | <code>java.lang.Number</code> | The total number of active user sessions on the route at a point in time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.additionalRoutes">additionalRoutes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>></code> | additional_routes block. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.cookieSuffix">cookieSuffix</a></code> | <code>java.lang.String</code> | A cookie suffix to be appended to the Cloudflare waiting room cookie name. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.customPageHtml">customPageHtml</a></code> | <code>java.lang.String</code> | This is a templated html file that will be rendered at the edge. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.defaultTemplateLanguage">defaultTemplateLanguage</a></code> | <code>java.lang.String</code> | The language to use for the default waiting room page. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description to add more details about the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.disableSessionRenewal">disableSessionRenewal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables automatic renewal of session cookies. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.enabledOriginCommands">enabledOriginCommands</a></code> | <code>java.util.List<java.lang.String></code> | The list of enabled origin commands for the waiting room. Available values: `revoke`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#id WaitingRoom#id}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.jsonResponseEnabled">jsonResponseEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.path">path</a></code> | <code>java.lang.String</code> | The path within the host to enable the waiting room on. Defaults to `/`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueAll">queueAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If queue_all is true, then all traffic will be sent to the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingMethod">queueingMethod</a></code> | <code>java.lang.String</code> | The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. Defaults to `fifo`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingStatusCode">queueingStatusCode</a></code> | <code>java.lang.Number</code> | HTTP status code returned to a user while in the queue. Defaults to `200`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.Number</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Suspends the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Host name for which the waiting room will be applied (no wildcards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#host WaitingRoom#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique name to identify the waiting room. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#name WaitingRoom#name}

---

##### `newUsersPerMinute`<sup>Required</sup> <a name="newUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.newUsersPerMinute"></a>

```java
public java.lang.Number getNewUsersPerMinute();
```

- *Type:* java.lang.Number

The number of new users that will be let into the route every minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#new_users_per_minute WaitingRoom#new_users_per_minute}

---

##### `totalActiveUsers`<sup>Required</sup> <a name="totalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.totalActiveUsers"></a>

```java
public java.lang.Number getTotalActiveUsers();
```

- *Type:* java.lang.Number

The total number of active user sessions on the route at a point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#total_active_users WaitingRoom#total_active_users}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#zone_id WaitingRoom#zone_id}

---

##### `additionalRoutes`<sup>Optional</sup> <a name="additionalRoutes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.additionalRoutes"></a>

```java
public java.lang.Object getAdditionalRoutes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>>

additional_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#additional_routes WaitingRoom#additional_routes}

---

##### `cookieSuffix`<sup>Optional</sup> <a name="cookieSuffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.cookieSuffix"></a>

```java
public java.lang.String getCookieSuffix();
```

- *Type:* java.lang.String

A cookie suffix to be appended to the Cloudflare waiting room cookie name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#cookie_suffix WaitingRoom#cookie_suffix}

---

##### `customPageHtml`<sup>Optional</sup> <a name="customPageHtml" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.customPageHtml"></a>

```java
public java.lang.String getCustomPageHtml();
```

- *Type:* java.lang.String

This is a templated html file that will be rendered at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#custom_page_html WaitingRoom#custom_page_html}

---

##### `defaultTemplateLanguage`<sup>Optional</sup> <a name="defaultTemplateLanguage" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.defaultTemplateLanguage"></a>

```java
public java.lang.String getDefaultTemplateLanguage();
```

- *Type:* java.lang.String

The language to use for the default waiting room page.

Available values: `de-DE`, `es-ES`, `en-US`, `fr-FR`, `id-ID`, `it-IT`, `ja-JP`, `ko-KR`, `nl-NL`, `pl-PL`, `pt-BR`, `tr-TR`, `zh-CN`, `zh-TW`, `ru-RU`, `fa-IR`, `bg-BG`, `hr-HR`, `cs-CZ`, `da-DK`, `fi-FI`, `lt-LT`, `ms-MY`, `nb-NO`, `ro-RO`, `el-GR`, `he-IL`, `hi-IN`, `hu-HU`, `sr-BA`, `sk-SK`, `sl-SI`, `sv-SE`, `tl-PH`, `th-TH`, `uk-UA`, `vi-VN`. Defaults to `en-US`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#default_template_language WaitingRoom#default_template_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description to add more details about the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#description WaitingRoom#description}

---

##### `disableSessionRenewal`<sup>Optional</sup> <a name="disableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.disableSessionRenewal"></a>

```java
public java.lang.Object getDisableSessionRenewal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables automatic renewal of session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#disable_session_renewal WaitingRoom#disable_session_renewal}

---

##### `enabledOriginCommands`<sup>Optional</sup> <a name="enabledOriginCommands" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.enabledOriginCommands"></a>

```java
public java.util.List<java.lang.String> getEnabledOriginCommands();
```

- *Type:* java.util.List<java.lang.String>

The list of enabled origin commands for the waiting room. Available values: `revoke`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#enabled_origin_commands WaitingRoom#enabled_origin_commands}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#id WaitingRoom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jsonResponseEnabled`<sup>Optional</sup> <a name="jsonResponseEnabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.jsonResponseEnabled"></a>

```java
public java.lang.Object getJsonResponseEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#json_response_enabled WaitingRoom#json_response_enabled}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path within the host to enable the waiting room on. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#path WaitingRoom#path}

---

##### `queueAll`<sup>Optional</sup> <a name="queueAll" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueAll"></a>

```java
public java.lang.Object getQueueAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If queue_all is true, then all traffic will be sent to the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#queue_all WaitingRoom#queue_all}

---

##### `queueingMethod`<sup>Optional</sup> <a name="queueingMethod" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingMethod"></a>

```java
public java.lang.String getQueueingMethod();
```

- *Type:* java.lang.String

The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. Defaults to `fifo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#queueing_method WaitingRoom#queueing_method}

---

##### `queueingStatusCode`<sup>Optional</sup> <a name="queueingStatusCode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingStatusCode"></a>

```java
public java.lang.Number getQueueingStatusCode();
```

- *Type:* java.lang.Number

HTTP status code returned to a user while in the queue. Defaults to `200`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#queueing_status_code WaitingRoom#queueing_status_code}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.sessionDuration"></a>

```java
public java.lang.Number getSessionDuration();
```

- *Type:* java.lang.Number

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin.

Defaults to `5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#session_duration WaitingRoom#session_duration}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Suspends the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#suspended WaitingRoom#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.timeouts"></a>

```java
public WaitingRoomTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#timeouts WaitingRoom#timeouts}

---

### WaitingRoomTimeouts <a name="WaitingRoomTimeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room.WaitingRoomTimeouts;

WaitingRoomTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#create WaitingRoom#create}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#update WaitingRoom#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#create WaitingRoom#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/waiting_room#update WaitingRoom#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WaitingRoomAdditionalRoutesList <a name="WaitingRoomAdditionalRoutesList" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room.WaitingRoomAdditionalRoutesList;

new WaitingRoomAdditionalRoutesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.get"></a>

```java
public WaitingRoomAdditionalRoutesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>>

---


### WaitingRoomAdditionalRoutesOutputReference <a name="WaitingRoomAdditionalRoutesOutputReference" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room.WaitingRoomAdditionalRoutesOutputReference;

new WaitingRoomAdditionalRoutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>

---


### WaitingRoomTimeoutsOutputReference <a name="WaitingRoomTimeoutsOutputReference" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.waiting_room.WaitingRoomTimeoutsOutputReference;

new WaitingRoomTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>

---



