# `cloudflare_waiting_room_event`

Refer to the Terraform Registory for docs: [`cloudflare_waiting_room_event`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event).

# `waitingRoomEvent` Submodule <a name="`waitingRoomEvent` Submodule" id="@cdktf/provider-cloudflare.waitingRoomEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaitingRoomEvent <a name="WaitingRoomEvent" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event cloudflare_waiting_room_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WaitingRoomEvent(Construct Scope, string Id, WaitingRoomEventConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig">WaitingRoomEventConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig">WaitingRoomEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetCustomPageHtml">ResetCustomPageHtml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDisableSessionRenewal">ResetDisableSessionRenewal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetNewUsersPerMinute">ResetNewUsersPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetPrequeueStartTime">ResetPrequeueStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetQueueingMethod">ResetQueueingMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetShuffleAtEventStart">ResetShuffleAtEventStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSuspended">ResetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTotalActiveUsers">ResetTotalActiveUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetCustomPageHtml` <a name="ResetCustomPageHtml" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetCustomPageHtml"></a>

```csharp
private void ResetCustomPageHtml()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableSessionRenewal` <a name="ResetDisableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDisableSessionRenewal"></a>

```csharp
private void ResetDisableSessionRenewal()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNewUsersPerMinute` <a name="ResetNewUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetNewUsersPerMinute"></a>

```csharp
private void ResetNewUsersPerMinute()
```

##### `ResetPrequeueStartTime` <a name="ResetPrequeueStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetPrequeueStartTime"></a>

```csharp
private void ResetPrequeueStartTime()
```

##### `ResetQueueingMethod` <a name="ResetQueueingMethod" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetQueueingMethod"></a>

```csharp
private void ResetQueueingMethod()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSessionDuration"></a>

```csharp
private void ResetSessionDuration()
```

##### `ResetShuffleAtEventStart` <a name="ResetShuffleAtEventStart" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetShuffleAtEventStart"></a>

```csharp
private void ResetShuffleAtEventStart()
```

##### `ResetSuspended` <a name="ResetSuspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSuspended"></a>

```csharp
private void ResetSuspended()
```

##### `ResetTotalActiveUsers` <a name="ResetTotalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTotalActiveUsers"></a>

```csharp
private void ResetTotalActiveUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WaitingRoomEvent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WaitingRoomEvent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WaitingRoomEvent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WaitingRoomEvent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WaitingRoomEvent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WaitingRoomEvent resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WaitingRoomEvent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WaitingRoomEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WaitingRoomEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtmlInput">CustomPageHtmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewalInput">DisableSessionRenewalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTimeInput">EventEndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTimeInput">EventStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinuteInput">NewUsersPerMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTimeInput">PrequeueStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethodInput">QueueingMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDurationInput">SessionDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStartInput">ShuffleAtEventStartInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspendedInput">SuspendedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsersInput">TotalActiveUsersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomIdInput">WaitingRoomIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtml">CustomPageHtml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewal">DisableSessionRenewal</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTime">EventEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTime">EventStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinute">NewUsersPerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTime">PrequeueStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethod">QueueingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDuration">SessionDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStart">ShuffleAtEventStart</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspended">Suspended</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsers">TotalActiveUsers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomId">WaitingRoomId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `CustomPageHtmlInput`<sup>Optional</sup> <a name="CustomPageHtmlInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtmlInput"></a>

```csharp
public string CustomPageHtmlInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableSessionRenewalInput`<sup>Optional</sup> <a name="DisableSessionRenewalInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewalInput"></a>

```csharp
public object DisableSessionRenewalInput { get; }
```

- *Type:* object

---

##### `EventEndTimeInput`<sup>Optional</sup> <a name="EventEndTimeInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTimeInput"></a>

```csharp
public string EventEndTimeInput { get; }
```

- *Type:* string

---

##### `EventStartTimeInput`<sup>Optional</sup> <a name="EventStartTimeInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTimeInput"></a>

```csharp
public string EventStartTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NewUsersPerMinuteInput`<sup>Optional</sup> <a name="NewUsersPerMinuteInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinuteInput"></a>

```csharp
public double NewUsersPerMinuteInput { get; }
```

- *Type:* double

---

##### `PrequeueStartTimeInput`<sup>Optional</sup> <a name="PrequeueStartTimeInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTimeInput"></a>

```csharp
public string PrequeueStartTimeInput { get; }
```

- *Type:* string

---

##### `QueueingMethodInput`<sup>Optional</sup> <a name="QueueingMethodInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethodInput"></a>

```csharp
public string QueueingMethodInput { get; }
```

- *Type:* string

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDurationInput"></a>

```csharp
public double SessionDurationInput { get; }
```

- *Type:* double

---

##### `ShuffleAtEventStartInput`<sup>Optional</sup> <a name="ShuffleAtEventStartInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStartInput"></a>

```csharp
public object ShuffleAtEventStartInput { get; }
```

- *Type:* object

---

##### `SuspendedInput`<sup>Optional</sup> <a name="SuspendedInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspendedInput"></a>

```csharp
public object SuspendedInput { get; }
```

- *Type:* object

---

##### `TotalActiveUsersInput`<sup>Optional</sup> <a name="TotalActiveUsersInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsersInput"></a>

```csharp
public double TotalActiveUsersInput { get; }
```

- *Type:* double

---

##### `WaitingRoomIdInput`<sup>Optional</sup> <a name="WaitingRoomIdInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomIdInput"></a>

```csharp
public string WaitingRoomIdInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `CustomPageHtml`<sup>Required</sup> <a name="CustomPageHtml" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtml"></a>

```csharp
public string CustomPageHtml { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableSessionRenewal`<sup>Required</sup> <a name="DisableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewal"></a>

```csharp
public object DisableSessionRenewal { get; }
```

- *Type:* object

---

##### `EventEndTime`<sup>Required</sup> <a name="EventEndTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTime"></a>

```csharp
public string EventEndTime { get; }
```

- *Type:* string

---

##### `EventStartTime`<sup>Required</sup> <a name="EventStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTime"></a>

```csharp
public string EventStartTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NewUsersPerMinute`<sup>Required</sup> <a name="NewUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinute"></a>

```csharp
public double NewUsersPerMinute { get; }
```

- *Type:* double

---

##### `PrequeueStartTime`<sup>Required</sup> <a name="PrequeueStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTime"></a>

```csharp
public string PrequeueStartTime { get; }
```

- *Type:* string

---

##### `QueueingMethod`<sup>Required</sup> <a name="QueueingMethod" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethod"></a>

```csharp
public string QueueingMethod { get; }
```

- *Type:* string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDuration"></a>

```csharp
public double SessionDuration { get; }
```

- *Type:* double

---

##### `ShuffleAtEventStart`<sup>Required</sup> <a name="ShuffleAtEventStart" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStart"></a>

```csharp
public object ShuffleAtEventStart { get; }
```

- *Type:* object

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspended"></a>

```csharp
public object Suspended { get; }
```

- *Type:* object

---

##### `TotalActiveUsers`<sup>Required</sup> <a name="TotalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsers"></a>

```csharp
public double TotalActiveUsers { get; }
```

- *Type:* double

---

##### `WaitingRoomId`<sup>Required</sup> <a name="WaitingRoomId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomId"></a>

```csharp
public string WaitingRoomId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WaitingRoomEventConfig <a name="WaitingRoomEventConfig" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WaitingRoomEventConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EventEndTime,
    string EventStartTime,
    string Name,
    string WaitingRoomId,
    string ZoneId,
    string CustomPageHtml = null,
    string Description = null,
    object DisableSessionRenewal = null,
    string Id = null,
    double NewUsersPerMinute = null,
    string PrequeueStartTime = null,
    string QueueingMethod = null,
    double SessionDuration = null,
    object ShuffleAtEventStart = null,
    object Suspended = null,
    double TotalActiveUsers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventEndTime">EventEndTime</a></code> | <code>string</code> | ISO 8601 timestamp that marks the end of the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventStartTime">EventStartTime</a></code> | <code>string</code> | ISO 8601 timestamp that marks the start of the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.name">Name</a></code> | <code>string</code> | A unique name to identify the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.waitingRoomId">WaitingRoomId</a></code> | <code>string</code> | The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.customPageHtml">CustomPageHtml</a></code> | <code>string</code> | This is a templated html file that will be rendered at the edge. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.description">Description</a></code> | <code>string</code> | A description to let users add more details about the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.disableSessionRenewal">DisableSessionRenewal</a></code> | <code>object</code> | Disables automatic renewal of session cookies. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#id WaitingRoomEvent#id}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.newUsersPerMinute">NewUsersPerMinute</a></code> | <code>double</code> | The number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.prequeueStartTime">PrequeueStartTime</a></code> | <code>string</code> | ISO 8601 timestamp that marks when to begin queueing all users before the event starts. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.queueingMethod">QueueingMethod</a></code> | <code>string</code> | The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.sessionDuration">SessionDuration</a></code> | <code>double</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.shuffleAtEventStart">ShuffleAtEventStart</a></code> | <code>object</code> | Users in the prequeue will be shuffled randomly at the `event_start_time`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.suspended">Suspended</a></code> | <code>object</code> | If suspended, the event is ignored and traffic will be handled based on the waiting room configuration. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.totalActiveUsers">TotalActiveUsers</a></code> | <code>double</code> | The total number of active user sessions on the route at a point in time. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EventEndTime`<sup>Required</sup> <a name="EventEndTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventEndTime"></a>

```csharp
public string EventEndTime { get; set; }
```

- *Type:* string

ISO 8601 timestamp that marks the end of the event.

**Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#event_end_time WaitingRoomEvent#event_end_time}

---

##### `EventStartTime`<sup>Required</sup> <a name="EventStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventStartTime"></a>

```csharp
public string EventStartTime { get; set; }
```

- *Type:* string

ISO 8601 timestamp that marks the start of the event.

Must occur at least 1 minute before `event_end_time`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#event_start_time WaitingRoomEvent#event_start_time}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A unique name to identify the event.

Only alphanumeric characters, hyphens, and underscores are allowed. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#name WaitingRoomEvent#name}

---

##### `WaitingRoomId`<sup>Required</sup> <a name="WaitingRoomId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.waitingRoomId"></a>

```csharp
public string WaitingRoomId { get; set; }
```

- *Type:* string

The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#waiting_room_id WaitingRoomEvent#waiting_room_id}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#zone_id WaitingRoomEvent#zone_id}

---

##### `CustomPageHtml`<sup>Optional</sup> <a name="CustomPageHtml" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.customPageHtml"></a>

```csharp
public string CustomPageHtml { get; set; }
```

- *Type:* string

This is a templated html file that will be rendered at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#custom_page_html WaitingRoomEvent#custom_page_html}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description to let users add more details about the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#description WaitingRoomEvent#description}

---

##### `DisableSessionRenewal`<sup>Optional</sup> <a name="DisableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.disableSessionRenewal"></a>

```csharp
public object DisableSessionRenewal { get; set; }
```

- *Type:* object

Disables automatic renewal of session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#disable_session_renewal WaitingRoomEvent#disable_session_renewal}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#id WaitingRoomEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NewUsersPerMinute`<sup>Optional</sup> <a name="NewUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.newUsersPerMinute"></a>

```csharp
public double NewUsersPerMinute { get; set; }
```

- *Type:* double

The number of new users that will be let into the route every minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#new_users_per_minute WaitingRoomEvent#new_users_per_minute}

---

##### `PrequeueStartTime`<sup>Optional</sup> <a name="PrequeueStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.prequeueStartTime"></a>

```csharp
public string PrequeueStartTime { get; set; }
```

- *Type:* string

ISO 8601 timestamp that marks when to begin queueing all users before the event starts.

Must occur at least 5 minutes before `event_start_time`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#prequeue_start_time WaitingRoomEvent#prequeue_start_time}

---

##### `QueueingMethod`<sup>Optional</sup> <a name="QueueingMethod" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.queueingMethod"></a>

```csharp
public string QueueingMethod { get; set; }
```

- *Type:* string

The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#queueing_method WaitingRoomEvent#queueing_method}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.sessionDuration"></a>

```csharp
public double SessionDuration { get; set; }
```

- *Type:* double

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#session_duration WaitingRoomEvent#session_duration}

---

##### `ShuffleAtEventStart`<sup>Optional</sup> <a name="ShuffleAtEventStart" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.shuffleAtEventStart"></a>

```csharp
public object ShuffleAtEventStart { get; set; }
```

- *Type:* object

Users in the prequeue will be shuffled randomly at the `event_start_time`.

Requires that `prequeue_start_time` is not null. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#shuffle_at_event_start WaitingRoomEvent#shuffle_at_event_start}

---

##### `Suspended`<sup>Optional</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.suspended"></a>

```csharp
public object Suspended { get; set; }
```

- *Type:* object

If suspended, the event is ignored and traffic will be handled based on the waiting room configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#suspended WaitingRoomEvent#suspended}

---

##### `TotalActiveUsers`<sup>Optional</sup> <a name="TotalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.totalActiveUsers"></a>

```csharp
public double TotalActiveUsers { get; set; }
```

- *Type:* double

The total number of active user sessions on the route at a point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room_event#total_active_users WaitingRoomEvent#total_active_users}

---



