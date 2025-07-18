# `notificationPolicy` Submodule <a name="`notificationPolicy` Submodule" id="@cdktf/provider-cloudflare.notificationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationPolicy <a name="NotificationPolicy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy cloudflare_notification_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicy(Construct Scope, string Id, NotificationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig">NotificationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig">NotificationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms">PutMechanisms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetAlertInterval">ResetAlertInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetFilters">ResetFilters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters"></a>

```csharp
private void PutFilters(NotificationPolicyFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

---

##### `PutMechanisms` <a name="PutMechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms"></a>

```csharp
private void PutMechanisms(NotificationPolicyMechanisms Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>

---

##### `ResetAlertInterval` <a name="ResetAlertInterval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetAlertInterval"></a>

```csharp
private void ResetAlertInterval()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetFilters"></a>

```csharp
private void ResetFilters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

NotificationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

NotificationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

NotificationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

NotificationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NotificationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference">NotificationPolicyFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanisms">Mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference">NotificationPolicyMechanismsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertIntervalInput">AlertIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertTypeInput">AlertTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filtersInput">FiltersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanismsInput">MechanismsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertInterval">AlertInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertType">AlertType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filters"></a>

```csharp
public NotificationPolicyFiltersOutputReference Filters { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference">NotificationPolicyFiltersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mechanisms`<sup>Required</sup> <a name="Mechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanisms"></a>

```csharp
public NotificationPolicyMechanismsOutputReference Mechanisms { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference">NotificationPolicyMechanismsOutputReference</a>

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AlertIntervalInput`<sup>Optional</sup> <a name="AlertIntervalInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertIntervalInput"></a>

```csharp
public string AlertIntervalInput { get; }
```

- *Type:* string

---

##### `AlertTypeInput`<sup>Optional</sup> <a name="AlertTypeInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertTypeInput"></a>

```csharp
public string AlertTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filtersInput"></a>

```csharp
public object FiltersInput { get; }
```

- *Type:* object

---

##### `MechanismsInput`<sup>Optional</sup> <a name="MechanismsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanismsInput"></a>

```csharp
public object MechanismsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AlertInterval`<sup>Required</sup> <a name="AlertInterval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertInterval"></a>

```csharp
public string AlertInterval { get; }
```

- *Type:* string

---

##### `AlertType`<sup>Required</sup> <a name="AlertType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertType"></a>

```csharp
public string AlertType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationPolicyConfig <a name="NotificationPolicyConfig" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string AlertType,
    NotificationPolicyMechanisms Mechanisms,
    string Name,
    string AlertInterval = null,
    string Description = null,
    object Enabled = null,
    NotificationPolicyFilters Filters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertType">AlertType</a></code> | <code>string</code> | Refers to which event will trigger a Notification dispatch. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.mechanisms">Mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a></code> | List of IDs that will be used when dispatching a notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertInterval">AlertInterval</a></code> | <code>string</code> | Optional specification of how often to re-alert from the same incident, not support on all alert types. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.description">Description</a></code> | <code>string</code> | Optional description for the Notification policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether or not the Notification policy is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a></code> | Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#account_id NotificationPolicy#account_id}

---

##### `AlertType`<sup>Required</sup> <a name="AlertType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertType"></a>

```csharp
public string AlertType { get; set; }
```

- *Type:* string

Refers to which event will trigger a Notification dispatch.

You can use the endpoint to get available alert types which then will give you a list of possible values.
Available values: "access_custom_certificate_expiration_type", "advanced_ddos_attack_l4_alert", "advanced_ddos_attack_l7_alert", "advanced_http_alert_error", "bgp_hijack_notification", "billing_usage_alert", "block_notification_block_removed", "block_notification_new_block", "block_notification_review_rejected", "bot_traffic_basic_alert", "brand_protection_alert", "brand_protection_digest", "clickhouse_alert_fw_anomaly", "clickhouse_alert_fw_ent_anomaly", "cloudforce_one_request_notification", "custom_analytics", "custom_bot_detection_alert", "custom_ssl_certificate_event_type", "dedicated_ssl_certificate_event_type", "device_connectivity_anomaly_alert", "dos_attack_l4", "dos_attack_l7", "expiring_service_token_alert", "failing_logpush_job_disabled_alert", "fbm_auto_advertisement", "fbm_dosd_attack", "fbm_volumetric_attack", "health_check_status_notification", "hostname_aop_custom_certificate_expiration_type", "http_alert_edge_error", "http_alert_origin_error", "image_notification", "image_resizing_notification", "incident_alert", "load_balancing_health_alert", "load_balancing_pool_enablement_alert", "logo_match_alert", "magic_tunnel_health_check_event", "magic_wan_tunnel_health", "maintenance_event_notification", "mtls_certificate_store_certificate_expiration_type", "pages_event_alert", "radar_notification", "real_origin_monitoring", "scriptmonitor_alert_new_code_change_detections", "scriptmonitor_alert_new_hosts", "scriptmonitor_alert_new_malicious_hosts", "scriptmonitor_alert_new_malicious_scripts", "scriptmonitor_alert_new_malicious_url", "scriptmonitor_alert_new_max_length_resource_url", "scriptmonitor_alert_new_resources", "secondary_dns_all_primaries_failing", "secondary_dns_primaries_failing", "secondary_dns_warning", "secondary_dns_zone_successfully_updated", "secondary_dns_zone_validation_warning", "security_insights_alert", "sentinel_alert", "stream_live_notifications", "synthetic_test_latency_alert", "synthetic_test_low_availability_alert", "traffic_anomalies_alert", "tunnel_health_event", "tunnel_update_event", "universal_ssl_event_type", "web_analytics_metrics_update", "zone_aop_custom_certificate_expiration_type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#alert_type NotificationPolicy#alert_type}

---

##### `Mechanisms`<sup>Required</sup> <a name="Mechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.mechanisms"></a>

```csharp
public NotificationPolicyMechanisms Mechanisms { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>

List of IDs that will be used when dispatching a notification.

IDs for email type will be the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#mechanisms NotificationPolicy#mechanisms}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#name NotificationPolicy#name}

---

##### `AlertInterval`<sup>Optional</sup> <a name="AlertInterval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertInterval"></a>

```csharp
public string AlertInterval { get; set; }
```

- *Type:* string

Optional specification of how often to re-alert from the same incident, not support on all alert types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#alert_interval NotificationPolicy#alert_interval}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional description for the Notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#description NotificationPolicy#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether or not the Notification policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.filters"></a>

```csharp
public NotificationPolicyFilters Filters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria.

This is only available for select alert types. See alert type documentation for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#filters NotificationPolicy#filters}

---

### NotificationPolicyFilters <a name="NotificationPolicyFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyFilters {
    string[] Actions = null,
    string[] AffectedAsns = null,
    string[] AffectedComponents = null,
    string[] AffectedLocations = null,
    string[] AirportCode = null,
    string[] AlertTriggerPreferences = null,
    string[] AlertTriggerPreferencesValue = null,
    string[] Enabled = null,
    string[] Environment = null,
    string[] Event = null,
    string[] EventSource = null,
    string[] EventType = null,
    string[] GroupBy = null,
    string[] HealthCheckId = null,
    string[] IncidentImpact = null,
    string[] InputId = null,
    string[] InsightClass = null,
    string[] Limit = null,
    string[] LogoTag = null,
    string[] MegabitsPerSecond = null,
    string[] NewHealth = null,
    string[] NewStatus = null,
    string[] PacketsPerSecond = null,
    string[] PoolId = null,
    string[] PopNames = null,
    string[] Product = null,
    string[] ProjectId = null,
    string[] Protocol = null,
    string[] QueryTag = null,
    string[] RequestsPerSecond = null,
    string[] Selectors = null,
    string[] Services = null,
    string[] Slo = null,
    string[] Status = null,
    string[] TargetHostname = null,
    string[] TargetIp = null,
    string[] TargetZoneName = null,
    string[] TrafficExclusions = null,
    string[] TunnelId = null,
    string[] TunnelName = null,
    string[] Where = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.actions">Actions</a></code> | <code>string[]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedAsns">AffectedAsns</a></code> | <code>string[]</code> | Used for configuring radar_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedComponents">AffectedComponents</a></code> | <code>string[]</code> | Used for configuring incident_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedLocations">AffectedLocations</a></code> | <code>string[]</code> | Used for configuring radar_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.airportCode">AirportCode</a></code> | <code>string[]</code> | Used for configuring maintenance_event_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferences">AlertTriggerPreferences</a></code> | <code>string[]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferencesValue">AlertTriggerPreferencesValue</a></code> | <code>string[]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.enabled">Enabled</a></code> | <code>string[]</code> | Used for configuring load_balancing_pool_enablement_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.environment">Environment</a></code> | <code>string[]</code> | Used for configuring pages_event_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.event">Event</a></code> | <code>string[]</code> | Used for configuring pages_event_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventSource">EventSource</a></code> | <code>string[]</code> | Used for configuring load_balancing_health_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventType">EventType</a></code> | <code>string[]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.groupBy">GroupBy</a></code> | <code>string[]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.healthCheckId">HealthCheckId</a></code> | <code>string[]</code> | Used for configuring health_check_status_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.incidentImpact">IncidentImpact</a></code> | <code>string[]</code> | Used for configuring incident_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.inputId">InputId</a></code> | <code>string[]</code> | Used for configuring stream_live_notifications. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.insightClass">InsightClass</a></code> | <code>string[]</code> | Used for configuring security_insights_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.limit">Limit</a></code> | <code>string[]</code> | Used for configuring billing_usage_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.logoTag">LogoTag</a></code> | <code>string[]</code> | Used for configuring logo_match_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.megabitsPerSecond">MegabitsPerSecond</a></code> | <code>string[]</code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newHealth">NewHealth</a></code> | <code>string[]</code> | Used for configuring load_balancing_health_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newStatus">NewStatus</a></code> | <code>string[]</code> | Used for configuring tunnel_health_event. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.packetsPerSecond">PacketsPerSecond</a></code> | <code>string[]</code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.poolId">PoolId</a></code> | <code>string[]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.popNames">PopNames</a></code> | <code>string[]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.product">Product</a></code> | <code>string[]</code> | Used for configuring billing_usage_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.projectId">ProjectId</a></code> | <code>string[]</code> | Used for configuring pages_event_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.protocol">Protocol</a></code> | <code>string[]</code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.queryTag">QueryTag</a></code> | <code>string[]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>string[]</code> | Used for configuring advanced_ddos_attack_l7_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.selectors">Selectors</a></code> | <code>string[]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.services">Services</a></code> | <code>string[]</code> | Used for configuring clickhouse_alert_fw_ent_anomaly. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.slo">Slo</a></code> | <code>string[]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.status">Status</a></code> | <code>string[]</code> | Used for configuring health_check_status_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetHostname">TargetHostname</a></code> | <code>string[]</code> | Used for configuring advanced_ddos_attack_l7_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetIp">TargetIp</a></code> | <code>string[]</code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetZoneName">TargetZoneName</a></code> | <code>string[]</code> | Used for configuring advanced_ddos_attack_l7_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.trafficExclusions">TrafficExclusions</a></code> | <code>string[]</code> | Used for configuring traffic_anomalies_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelId">TunnelId</a></code> | <code>string[]</code> | Used for configuring tunnel_health_event. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelName">TunnelName</a></code> | <code>string[]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.where">Where</a></code> | <code>string[]</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.zones">Zones</a></code> | <code>string[]</code> | Usage depends on specific alert type. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#actions NotificationPolicy#actions}

---

##### `AffectedAsns`<sup>Optional</sup> <a name="AffectedAsns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedAsns"></a>

```csharp
public string[] AffectedAsns { get; set; }
```

- *Type:* string[]

Used for configuring radar_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#affected_asns NotificationPolicy#affected_asns}

---

##### `AffectedComponents`<sup>Optional</sup> <a name="AffectedComponents" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedComponents"></a>

```csharp
public string[] AffectedComponents { get; set; }
```

- *Type:* string[]

Used for configuring incident_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#affected_components NotificationPolicy#affected_components}

---

##### `AffectedLocations`<sup>Optional</sup> <a name="AffectedLocations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedLocations"></a>

```csharp
public string[] AffectedLocations { get; set; }
```

- *Type:* string[]

Used for configuring radar_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#affected_locations NotificationPolicy#affected_locations}

---

##### `AirportCode`<sup>Optional</sup> <a name="AirportCode" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.airportCode"></a>

```csharp
public string[] AirportCode { get; set; }
```

- *Type:* string[]

Used for configuring maintenance_event_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#airport_code NotificationPolicy#airport_code}

---

##### `AlertTriggerPreferences`<sup>Optional</sup> <a name="AlertTriggerPreferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferences"></a>

```csharp
public string[] AlertTriggerPreferences { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#alert_trigger_preferences NotificationPolicy#alert_trigger_preferences}

---

##### `AlertTriggerPreferencesValue`<sup>Optional</sup> <a name="AlertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferencesValue"></a>

```csharp
public string[] AlertTriggerPreferencesValue { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#alert_trigger_preferences_value NotificationPolicy#alert_trigger_preferences_value}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.enabled"></a>

```csharp
public string[] Enabled { get; set; }
```

- *Type:* string[]

Used for configuring load_balancing_pool_enablement_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.environment"></a>

```csharp
public string[] Environment { get; set; }
```

- *Type:* string[]

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#environment NotificationPolicy#environment}

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.event"></a>

```csharp
public string[] Event { get; set; }
```

- *Type:* string[]

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#event NotificationPolicy#event}

---

##### `EventSource`<sup>Optional</sup> <a name="EventSource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventSource"></a>

```csharp
public string[] EventSource { get; set; }
```

- *Type:* string[]

Used for configuring load_balancing_health_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#event_source NotificationPolicy#event_source}

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventType"></a>

```csharp
public string[] EventType { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#event_type NotificationPolicy#event_type}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.groupBy"></a>

```csharp
public string[] GroupBy { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#group_by NotificationPolicy#group_by}

---

##### `HealthCheckId`<sup>Optional</sup> <a name="HealthCheckId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.healthCheckId"></a>

```csharp
public string[] HealthCheckId { get; set; }
```

- *Type:* string[]

Used for configuring health_check_status_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#health_check_id NotificationPolicy#health_check_id}

---

##### `IncidentImpact`<sup>Optional</sup> <a name="IncidentImpact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.incidentImpact"></a>

```csharp
public string[] IncidentImpact { get; set; }
```

- *Type:* string[]

Used for configuring incident_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#incident_impact NotificationPolicy#incident_impact}

---

##### `InputId`<sup>Optional</sup> <a name="InputId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.inputId"></a>

```csharp
public string[] InputId { get; set; }
```

- *Type:* string[]

Used for configuring stream_live_notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#input_id NotificationPolicy#input_id}

---

##### `InsightClass`<sup>Optional</sup> <a name="InsightClass" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.insightClass"></a>

```csharp
public string[] InsightClass { get; set; }
```

- *Type:* string[]

Used for configuring security_insights_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#insight_class NotificationPolicy#insight_class}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.limit"></a>

```csharp
public string[] Limit { get; set; }
```

- *Type:* string[]

Used for configuring billing_usage_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#limit NotificationPolicy#limit}

---

##### `LogoTag`<sup>Optional</sup> <a name="LogoTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.logoTag"></a>

```csharp
public string[] LogoTag { get; set; }
```

- *Type:* string[]

Used for configuring logo_match_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#logo_tag NotificationPolicy#logo_tag}

---

##### `MegabitsPerSecond`<sup>Optional</sup> <a name="MegabitsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.megabitsPerSecond"></a>

```csharp
public string[] MegabitsPerSecond { get; set; }
```

- *Type:* string[]

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#megabits_per_second NotificationPolicy#megabits_per_second}

---

##### `NewHealth`<sup>Optional</sup> <a name="NewHealth" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newHealth"></a>

```csharp
public string[] NewHealth { get; set; }
```

- *Type:* string[]

Used for configuring load_balancing_health_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#new_health NotificationPolicy#new_health}

---

##### `NewStatus`<sup>Optional</sup> <a name="NewStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newStatus"></a>

```csharp
public string[] NewStatus { get; set; }
```

- *Type:* string[]

Used for configuring tunnel_health_event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#new_status NotificationPolicy#new_status}

---

##### `PacketsPerSecond`<sup>Optional</sup> <a name="PacketsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.packetsPerSecond"></a>

```csharp
public string[] PacketsPerSecond { get; set; }
```

- *Type:* string[]

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#packets_per_second NotificationPolicy#packets_per_second}

---

##### `PoolId`<sup>Optional</sup> <a name="PoolId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.poolId"></a>

```csharp
public string[] PoolId { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#pool_id NotificationPolicy#pool_id}

---

##### `PopNames`<sup>Optional</sup> <a name="PopNames" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.popNames"></a>

```csharp
public string[] PopNames { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#pop_names NotificationPolicy#pop_names}

---

##### `Product`<sup>Optional</sup> <a name="Product" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.product"></a>

```csharp
public string[] Product { get; set; }
```

- *Type:* string[]

Used for configuring billing_usage_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#product NotificationPolicy#product}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.projectId"></a>

```csharp
public string[] ProjectId { get; set; }
```

- *Type:* string[]

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#project_id NotificationPolicy#project_id}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.protocol"></a>

```csharp
public string[] Protocol { get; set; }
```

- *Type:* string[]

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#protocol NotificationPolicy#protocol}

---

##### `QueryTag`<sup>Optional</sup> <a name="QueryTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.queryTag"></a>

```csharp
public string[] QueryTag { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#query_tag NotificationPolicy#query_tag}

---

##### `RequestsPerSecond`<sup>Optional</sup> <a name="RequestsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.requestsPerSecond"></a>

```csharp
public string[] RequestsPerSecond { get; set; }
```

- *Type:* string[]

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#requests_per_second NotificationPolicy#requests_per_second}

---

##### `Selectors`<sup>Optional</sup> <a name="Selectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.selectors"></a>

```csharp
public string[] Selectors { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#selectors NotificationPolicy#selectors}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.services"></a>

```csharp
public string[] Services { get; set; }
```

- *Type:* string[]

Used for configuring clickhouse_alert_fw_ent_anomaly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#services NotificationPolicy#services}

---

##### `Slo`<sup>Optional</sup> <a name="Slo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.slo"></a>

```csharp
public string[] Slo { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#slo NotificationPolicy#slo}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.status"></a>

```csharp
public string[] Status { get; set; }
```

- *Type:* string[]

Used for configuring health_check_status_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#status NotificationPolicy#status}

---

##### `TargetHostname`<sup>Optional</sup> <a name="TargetHostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetHostname"></a>

```csharp
public string[] TargetHostname { get; set; }
```

- *Type:* string[]

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#target_hostname NotificationPolicy#target_hostname}

---

##### `TargetIp`<sup>Optional</sup> <a name="TargetIp" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetIp"></a>

```csharp
public string[] TargetIp { get; set; }
```

- *Type:* string[]

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#target_ip NotificationPolicy#target_ip}

---

##### `TargetZoneName`<sup>Optional</sup> <a name="TargetZoneName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetZoneName"></a>

```csharp
public string[] TargetZoneName { get; set; }
```

- *Type:* string[]

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#target_zone_name NotificationPolicy#target_zone_name}

---

##### `TrafficExclusions`<sup>Optional</sup> <a name="TrafficExclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.trafficExclusions"></a>

```csharp
public string[] TrafficExclusions { get; set; }
```

- *Type:* string[]

Used for configuring traffic_anomalies_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#traffic_exclusions NotificationPolicy#traffic_exclusions}

---

##### `TunnelId`<sup>Optional</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelId"></a>

```csharp
public string[] TunnelId { get; set; }
```

- *Type:* string[]

Used for configuring tunnel_health_event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#tunnel_id NotificationPolicy#tunnel_id}

---

##### `TunnelName`<sup>Optional</sup> <a name="TunnelName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelName"></a>

```csharp
public string[] TunnelName { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#tunnel_name NotificationPolicy#tunnel_name}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.where"></a>

```csharp
public string[] Where { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#where NotificationPolicy#where}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#zones NotificationPolicy#zones}

---

### NotificationPolicyMechanisms <a name="NotificationPolicyMechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyMechanisms {
    object Email = null,
    object Pagerduty = null,
    object Webhooks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.email">Email</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#email NotificationPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.pagerduty">Pagerduty</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#pagerduty NotificationPolicy#pagerduty}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.webhooks">Webhooks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#webhooks NotificationPolicy#webhooks}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.email"></a>

```csharp
public object Email { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#email NotificationPolicy#email}.

---

##### `Pagerduty`<sup>Optional</sup> <a name="Pagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.pagerduty"></a>

```csharp
public object Pagerduty { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#pagerduty NotificationPolicy#pagerduty}.

---

##### `Webhooks`<sup>Optional</sup> <a name="Webhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.webhooks"></a>

```csharp
public object Webhooks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#webhooks NotificationPolicy#webhooks}.

---

### NotificationPolicyMechanismsEmail <a name="NotificationPolicyMechanismsEmail" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyMechanismsEmail {
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail.property.id">Id</a></code> | <code>string</code> | The email address. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#id NotificationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationPolicyMechanismsPagerduty <a name="NotificationPolicyMechanismsPagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyMechanismsPagerduty {
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty.property.id">Id</a></code> | <code>string</code> | UUID. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#id NotificationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationPolicyMechanismsWebhooks <a name="NotificationPolicyMechanismsWebhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyMechanismsWebhooks {
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks.property.id">Id</a></code> | <code>string</code> | UUID. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/notification_policy#id NotificationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationPolicyFiltersOutputReference <a name="NotificationPolicyFiltersOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedAsns">ResetAffectedAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedComponents">ResetAffectedComponents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedLocations">ResetAffectedLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAirportCode">ResetAirportCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferences">ResetAlertTriggerPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferencesValue">ResetAlertTriggerPreferencesValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventSource">ResetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetHealthCheckId">ResetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetIncidentImpact">ResetIncidentImpact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInputId">ResetInputId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInsightClass">ResetInsightClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLogoTag">ResetLogoTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetMegabitsPerSecond">ResetMegabitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewHealth">ResetNewHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewStatus">ResetNewStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPacketsPerSecond">ResetPacketsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPoolId">ResetPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPopNames">ResetPopNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetQueryTag">ResetQueryTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetRequestsPerSecond">ResetRequestsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSelectors">ResetSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetServices">ResetServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSlo">ResetSlo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetHostname">ResetTargetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetIp">ResetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetZoneName">ResetTargetZoneName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTrafficExclusions">ResetTrafficExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelId">ResetTunnelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelName">ResetTunnelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetWhere">ResetWhere</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetAffectedAsns` <a name="ResetAffectedAsns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedAsns"></a>

```csharp
private void ResetAffectedAsns()
```

##### `ResetAffectedComponents` <a name="ResetAffectedComponents" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedComponents"></a>

```csharp
private void ResetAffectedComponents()
```

##### `ResetAffectedLocations` <a name="ResetAffectedLocations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedLocations"></a>

```csharp
private void ResetAffectedLocations()
```

##### `ResetAirportCode` <a name="ResetAirportCode" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAirportCode"></a>

```csharp
private void ResetAirportCode()
```

##### `ResetAlertTriggerPreferences` <a name="ResetAlertTriggerPreferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferences"></a>

```csharp
private void ResetAlertTriggerPreferences()
```

##### `ResetAlertTriggerPreferencesValue` <a name="ResetAlertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferencesValue"></a>

```csharp
private void ResetAlertTriggerPreferencesValue()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetEvent` <a name="ResetEvent" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEvent"></a>

```csharp
private void ResetEvent()
```

##### `ResetEventSource` <a name="ResetEventSource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventSource"></a>

```csharp
private void ResetEventSource()
```

##### `ResetEventType` <a name="ResetEventType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventType"></a>

```csharp
private void ResetEventType()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

##### `ResetHealthCheckId` <a name="ResetHealthCheckId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetHealthCheckId"></a>

```csharp
private void ResetHealthCheckId()
```

##### `ResetIncidentImpact` <a name="ResetIncidentImpact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetIncidentImpact"></a>

```csharp
private void ResetIncidentImpact()
```

##### `ResetInputId` <a name="ResetInputId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInputId"></a>

```csharp
private void ResetInputId()
```

##### `ResetInsightClass` <a name="ResetInsightClass" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInsightClass"></a>

```csharp
private void ResetInsightClass()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetLogoTag` <a name="ResetLogoTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLogoTag"></a>

```csharp
private void ResetLogoTag()
```

##### `ResetMegabitsPerSecond` <a name="ResetMegabitsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetMegabitsPerSecond"></a>

```csharp
private void ResetMegabitsPerSecond()
```

##### `ResetNewHealth` <a name="ResetNewHealth" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewHealth"></a>

```csharp
private void ResetNewHealth()
```

##### `ResetNewStatus` <a name="ResetNewStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewStatus"></a>

```csharp
private void ResetNewStatus()
```

##### `ResetPacketsPerSecond` <a name="ResetPacketsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPacketsPerSecond"></a>

```csharp
private void ResetPacketsPerSecond()
```

##### `ResetPoolId` <a name="ResetPoolId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPoolId"></a>

```csharp
private void ResetPoolId()
```

##### `ResetPopNames` <a name="ResetPopNames" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPopNames"></a>

```csharp
private void ResetPopNames()
```

##### `ResetProduct` <a name="ResetProduct" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProduct"></a>

```csharp
private void ResetProduct()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetQueryTag` <a name="ResetQueryTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetQueryTag"></a>

```csharp
private void ResetQueryTag()
```

##### `ResetRequestsPerSecond` <a name="ResetRequestsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetRequestsPerSecond"></a>

```csharp
private void ResetRequestsPerSecond()
```

##### `ResetSelectors` <a name="ResetSelectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSelectors"></a>

```csharp
private void ResetSelectors()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetServices"></a>

```csharp
private void ResetServices()
```

##### `ResetSlo` <a name="ResetSlo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSlo"></a>

```csharp
private void ResetSlo()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTargetHostname` <a name="ResetTargetHostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetHostname"></a>

```csharp
private void ResetTargetHostname()
```

##### `ResetTargetIp` <a name="ResetTargetIp" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetIp"></a>

```csharp
private void ResetTargetIp()
```

##### `ResetTargetZoneName` <a name="ResetTargetZoneName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetZoneName"></a>

```csharp
private void ResetTargetZoneName()
```

##### `ResetTrafficExclusions` <a name="ResetTrafficExclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTrafficExclusions"></a>

```csharp
private void ResetTrafficExclusions()
```

##### `ResetTunnelId` <a name="ResetTunnelId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelId"></a>

```csharp
private void ResetTunnelId()
```

##### `ResetTunnelName` <a name="ResetTunnelName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelName"></a>

```csharp
private void ResetTunnelName()
```

##### `ResetWhere` <a name="ResetWhere" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetWhere"></a>

```csharp
private void ResetWhere()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetZones"></a>

```csharp
private void ResetZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsnsInput">AffectedAsnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponentsInput">AffectedComponentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocationsInput">AffectedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCodeInput">AirportCodeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesInput">AlertTriggerPreferencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValueInput">AlertTriggerPreferencesValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabledInput">EnabledInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventInput">EventInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupByInput">GroupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckIdInput">HealthCheckIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpactInput">IncidentImpactInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputIdInput">InputIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClassInput">InsightClassInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limitInput">LimitInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTagInput">LogoTagInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecondInput">MegabitsPerSecondInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealthInput">NewHealthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatusInput">NewStatusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecondInput">PacketsPerSecondInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolIdInput">PoolIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNamesInput">PopNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.productInput">ProductInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTagInput">QueryTagInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecondInput">RequestsPerSecondInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.servicesInput">ServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.sloInput">SloInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.statusInput">StatusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostnameInput">TargetHostnameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIpInput">TargetIpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneNameInput">TargetZoneNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusionsInput">TrafficExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelIdInput">TunnelIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelNameInput">TunnelNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.whereInput">WhereInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsns">AffectedAsns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponents">AffectedComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocations">AffectedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCode">AirportCode</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferences">AlertTriggerPreferences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue">AlertTriggerPreferencesValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabled">Enabled</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environment">Environment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.event">Event</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSource">EventSource</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventType">EventType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupBy">GroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckId">HealthCheckId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpact">IncidentImpact</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputId">InputId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClass">InsightClass</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limit">Limit</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTag">LogoTag</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecond">MegabitsPerSecond</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealth">NewHealth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatus">NewStatus</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecond">PacketsPerSecond</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolId">PoolId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNames">PopNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.product">Product</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectId">ProjectId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocol">Protocol</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTag">QueryTag</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectors">Selectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.services">Services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.slo">Slo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.status">Status</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostname">TargetHostname</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIp">TargetIp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneName">TargetZoneName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusions">TrafficExclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelId">TunnelId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelName">TunnelName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.where">Where</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `AffectedAsnsInput`<sup>Optional</sup> <a name="AffectedAsnsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsnsInput"></a>

```csharp
public string[] AffectedAsnsInput { get; }
```

- *Type:* string[]

---

##### `AffectedComponentsInput`<sup>Optional</sup> <a name="AffectedComponentsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponentsInput"></a>

```csharp
public string[] AffectedComponentsInput { get; }
```

- *Type:* string[]

---

##### `AffectedLocationsInput`<sup>Optional</sup> <a name="AffectedLocationsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocationsInput"></a>

```csharp
public string[] AffectedLocationsInput { get; }
```

- *Type:* string[]

---

##### `AirportCodeInput`<sup>Optional</sup> <a name="AirportCodeInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCodeInput"></a>

```csharp
public string[] AirportCodeInput { get; }
```

- *Type:* string[]

---

##### `AlertTriggerPreferencesInput`<sup>Optional</sup> <a name="AlertTriggerPreferencesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesInput"></a>

```csharp
public string[] AlertTriggerPreferencesInput { get; }
```

- *Type:* string[]

---

##### `AlertTriggerPreferencesValueInput`<sup>Optional</sup> <a name="AlertTriggerPreferencesValueInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValueInput"></a>

```csharp
public string[] AlertTriggerPreferencesValueInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabledInput"></a>

```csharp
public string[] EnabledInput { get; }
```

- *Type:* string[]

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environmentInput"></a>

```csharp
public string[] EnvironmentInput { get; }
```

- *Type:* string[]

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventInput"></a>

```csharp
public string[] EventInput { get; }
```

- *Type:* string[]

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSourceInput"></a>

```csharp
public string[] EventSourceInput { get; }
```

- *Type:* string[]

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventTypeInput"></a>

```csharp
public string[] EventTypeInput { get; }
```

- *Type:* string[]

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupByInput"></a>

```csharp
public string[] GroupByInput { get; }
```

- *Type:* string[]

---

##### `HealthCheckIdInput`<sup>Optional</sup> <a name="HealthCheckIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckIdInput"></a>

```csharp
public string[] HealthCheckIdInput { get; }
```

- *Type:* string[]

---

##### `IncidentImpactInput`<sup>Optional</sup> <a name="IncidentImpactInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpactInput"></a>

```csharp
public string[] IncidentImpactInput { get; }
```

- *Type:* string[]

---

##### `InputIdInput`<sup>Optional</sup> <a name="InputIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputIdInput"></a>

```csharp
public string[] InputIdInput { get; }
```

- *Type:* string[]

---

##### `InsightClassInput`<sup>Optional</sup> <a name="InsightClassInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClassInput"></a>

```csharp
public string[] InsightClassInput { get; }
```

- *Type:* string[]

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limitInput"></a>

```csharp
public string[] LimitInput { get; }
```

- *Type:* string[]

---

##### `LogoTagInput`<sup>Optional</sup> <a name="LogoTagInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTagInput"></a>

```csharp
public string[] LogoTagInput { get; }
```

- *Type:* string[]

---

##### `MegabitsPerSecondInput`<sup>Optional</sup> <a name="MegabitsPerSecondInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecondInput"></a>

```csharp
public string[] MegabitsPerSecondInput { get; }
```

- *Type:* string[]

---

##### `NewHealthInput`<sup>Optional</sup> <a name="NewHealthInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealthInput"></a>

```csharp
public string[] NewHealthInput { get; }
```

- *Type:* string[]

---

##### `NewStatusInput`<sup>Optional</sup> <a name="NewStatusInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatusInput"></a>

```csharp
public string[] NewStatusInput { get; }
```

- *Type:* string[]

---

##### `PacketsPerSecondInput`<sup>Optional</sup> <a name="PacketsPerSecondInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecondInput"></a>

```csharp
public string[] PacketsPerSecondInput { get; }
```

- *Type:* string[]

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolIdInput"></a>

```csharp
public string[] PoolIdInput { get; }
```

- *Type:* string[]

---

##### `PopNamesInput`<sup>Optional</sup> <a name="PopNamesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNamesInput"></a>

```csharp
public string[] PopNamesInput { get; }
```

- *Type:* string[]

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.productInput"></a>

```csharp
public string[] ProductInput { get; }
```

- *Type:* string[]

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectIdInput"></a>

```csharp
public string[] ProjectIdInput { get; }
```

- *Type:* string[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocolInput"></a>

```csharp
public string[] ProtocolInput { get; }
```

- *Type:* string[]

---

##### `QueryTagInput`<sup>Optional</sup> <a name="QueryTagInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTagInput"></a>

```csharp
public string[] QueryTagInput { get; }
```

- *Type:* string[]

---

##### `RequestsPerSecondInput`<sup>Optional</sup> <a name="RequestsPerSecondInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecondInput"></a>

```csharp
public string[] RequestsPerSecondInput { get; }
```

- *Type:* string[]

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectorsInput"></a>

```csharp
public string[] SelectorsInput { get; }
```

- *Type:* string[]

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.servicesInput"></a>

```csharp
public string[] ServicesInput { get; }
```

- *Type:* string[]

---

##### `SloInput`<sup>Optional</sup> <a name="SloInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.sloInput"></a>

```csharp
public string[] SloInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.statusInput"></a>

```csharp
public string[] StatusInput { get; }
```

- *Type:* string[]

---

##### `TargetHostnameInput`<sup>Optional</sup> <a name="TargetHostnameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostnameInput"></a>

```csharp
public string[] TargetHostnameInput { get; }
```

- *Type:* string[]

---

##### `TargetIpInput`<sup>Optional</sup> <a name="TargetIpInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIpInput"></a>

```csharp
public string[] TargetIpInput { get; }
```

- *Type:* string[]

---

##### `TargetZoneNameInput`<sup>Optional</sup> <a name="TargetZoneNameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneNameInput"></a>

```csharp
public string[] TargetZoneNameInput { get; }
```

- *Type:* string[]

---

##### `TrafficExclusionsInput`<sup>Optional</sup> <a name="TrafficExclusionsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusionsInput"></a>

```csharp
public string[] TrafficExclusionsInput { get; }
```

- *Type:* string[]

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelIdInput"></a>

```csharp
public string[] TunnelIdInput { get; }
```

- *Type:* string[]

---

##### `TunnelNameInput`<sup>Optional</sup> <a name="TunnelNameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelNameInput"></a>

```csharp
public string[] TunnelNameInput { get; }
```

- *Type:* string[]

---

##### `WhereInput`<sup>Optional</sup> <a name="WhereInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.whereInput"></a>

```csharp
public string[] WhereInput { get; }
```

- *Type:* string[]

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `AffectedAsns`<sup>Required</sup> <a name="AffectedAsns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsns"></a>

```csharp
public string[] AffectedAsns { get; }
```

- *Type:* string[]

---

##### `AffectedComponents`<sup>Required</sup> <a name="AffectedComponents" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponents"></a>

```csharp
public string[] AffectedComponents { get; }
```

- *Type:* string[]

---

##### `AffectedLocations`<sup>Required</sup> <a name="AffectedLocations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocations"></a>

```csharp
public string[] AffectedLocations { get; }
```

- *Type:* string[]

---

##### `AirportCode`<sup>Required</sup> <a name="AirportCode" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCode"></a>

```csharp
public string[] AirportCode { get; }
```

- *Type:* string[]

---

##### `AlertTriggerPreferences`<sup>Required</sup> <a name="AlertTriggerPreferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferences"></a>

```csharp
public string[] AlertTriggerPreferences { get; }
```

- *Type:* string[]

---

##### `AlertTriggerPreferencesValue`<sup>Required</sup> <a name="AlertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue"></a>

```csharp
public string[] AlertTriggerPreferencesValue { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabled"></a>

```csharp
public string[] Enabled { get; }
```

- *Type:* string[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environment"></a>

```csharp
public string[] Environment { get; }
```

- *Type:* string[]

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.event"></a>

```csharp
public string[] Event { get; }
```

- *Type:* string[]

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSource"></a>

```csharp
public string[] EventSource { get; }
```

- *Type:* string[]

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventType"></a>

```csharp
public string[] EventType { get; }
```

- *Type:* string[]

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupBy"></a>

```csharp
public string[] GroupBy { get; }
```

- *Type:* string[]

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckId"></a>

```csharp
public string[] HealthCheckId { get; }
```

- *Type:* string[]

---

##### `IncidentImpact`<sup>Required</sup> <a name="IncidentImpact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpact"></a>

```csharp
public string[] IncidentImpact { get; }
```

- *Type:* string[]

---

##### `InputId`<sup>Required</sup> <a name="InputId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputId"></a>

```csharp
public string[] InputId { get; }
```

- *Type:* string[]

---

##### `InsightClass`<sup>Required</sup> <a name="InsightClass" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClass"></a>

```csharp
public string[] InsightClass { get; }
```

- *Type:* string[]

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limit"></a>

```csharp
public string[] Limit { get; }
```

- *Type:* string[]

---

##### `LogoTag`<sup>Required</sup> <a name="LogoTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTag"></a>

```csharp
public string[] LogoTag { get; }
```

- *Type:* string[]

---

##### `MegabitsPerSecond`<sup>Required</sup> <a name="MegabitsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecond"></a>

```csharp
public string[] MegabitsPerSecond { get; }
```

- *Type:* string[]

---

##### `NewHealth`<sup>Required</sup> <a name="NewHealth" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealth"></a>

```csharp
public string[] NewHealth { get; }
```

- *Type:* string[]

---

##### `NewStatus`<sup>Required</sup> <a name="NewStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatus"></a>

```csharp
public string[] NewStatus { get; }
```

- *Type:* string[]

---

##### `PacketsPerSecond`<sup>Required</sup> <a name="PacketsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecond"></a>

```csharp
public string[] PacketsPerSecond { get; }
```

- *Type:* string[]

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolId"></a>

```csharp
public string[] PoolId { get; }
```

- *Type:* string[]

---

##### `PopNames`<sup>Required</sup> <a name="PopNames" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNames"></a>

```csharp
public string[] PopNames { get; }
```

- *Type:* string[]

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.product"></a>

```csharp
public string[] Product { get; }
```

- *Type:* string[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectId"></a>

```csharp
public string[] ProjectId { get; }
```

- *Type:* string[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocol"></a>

```csharp
public string[] Protocol { get; }
```

- *Type:* string[]

---

##### `QueryTag`<sup>Required</sup> <a name="QueryTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTag"></a>

```csharp
public string[] QueryTag { get; }
```

- *Type:* string[]

---

##### `RequestsPerSecond`<sup>Required</sup> <a name="RequestsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecond"></a>

```csharp
public string[] RequestsPerSecond { get; }
```

- *Type:* string[]

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectors"></a>

```csharp
public string[] Selectors { get; }
```

- *Type:* string[]

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.services"></a>

```csharp
public string[] Services { get; }
```

- *Type:* string[]

---

##### `Slo`<sup>Required</sup> <a name="Slo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.slo"></a>

```csharp
public string[] Slo { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.status"></a>

```csharp
public string[] Status { get; }
```

- *Type:* string[]

---

##### `TargetHostname`<sup>Required</sup> <a name="TargetHostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostname"></a>

```csharp
public string[] TargetHostname { get; }
```

- *Type:* string[]

---

##### `TargetIp`<sup>Required</sup> <a name="TargetIp" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIp"></a>

```csharp
public string[] TargetIp { get; }
```

- *Type:* string[]

---

##### `TargetZoneName`<sup>Required</sup> <a name="TargetZoneName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneName"></a>

```csharp
public string[] TargetZoneName { get; }
```

- *Type:* string[]

---

##### `TrafficExclusions`<sup>Required</sup> <a name="TrafficExclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusions"></a>

```csharp
public string[] TrafficExclusions { get; }
```

- *Type:* string[]

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelId"></a>

```csharp
public string[] TunnelId { get; }
```

- *Type:* string[]

---

##### `TunnelName`<sup>Required</sup> <a name="TunnelName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelName"></a>

```csharp
public string[] TunnelName { get; }
```

- *Type:* string[]

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.where"></a>

```csharp
public string[] Where { get; }
```

- *Type:* string[]

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationPolicyMechanismsEmailList <a name="NotificationPolicyMechanismsEmailList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyMechanismsEmailList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.get"></a>

```csharp
private NotificationPolicyMechanismsEmailOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationPolicyMechanismsEmailOutputReference <a name="NotificationPolicyMechanismsEmailOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyMechanismsEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationPolicyMechanismsOutputReference <a name="NotificationPolicyMechanismsOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyMechanismsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putEmail">PutEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putPagerduty">PutPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putWebhooks">PutWebhooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetPagerduty">ResetPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetWebhooks">ResetWebhooks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmail` <a name="PutEmail" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putEmail"></a>

```csharp
private void PutEmail(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putEmail.parameter.value"></a>

- *Type:* object

---

##### `PutPagerduty` <a name="PutPagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putPagerduty"></a>

```csharp
private void PutPagerduty(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putPagerduty.parameter.value"></a>

- *Type:* object

---

##### `PutWebhooks` <a name="PutWebhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putWebhooks"></a>

```csharp
private void PutWebhooks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putWebhooks.parameter.value"></a>

- *Type:* object

---

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetPagerduty` <a name="ResetPagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetPagerduty"></a>

```csharp
private void ResetPagerduty()
```

##### `ResetWebhooks` <a name="ResetWebhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetWebhooks"></a>

```csharp
private void ResetWebhooks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.email">Email</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList">NotificationPolicyMechanismsEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList">NotificationPolicyMechanismsPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooks">Webhooks</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList">NotificationPolicyMechanismsWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.emailInput">EmailInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerdutyInput">PagerdutyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooksInput">WebhooksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.email"></a>

```csharp
public NotificationPolicyMechanismsEmailList Email { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList">NotificationPolicyMechanismsEmailList</a>

---

##### `Pagerduty`<sup>Required</sup> <a name="Pagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerduty"></a>

```csharp
public NotificationPolicyMechanismsPagerdutyList Pagerduty { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList">NotificationPolicyMechanismsPagerdutyList</a>

---

##### `Webhooks`<sup>Required</sup> <a name="Webhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooks"></a>

```csharp
public NotificationPolicyMechanismsWebhooksList Webhooks { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList">NotificationPolicyMechanismsWebhooksList</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.emailInput"></a>

```csharp
public object EmailInput { get; }
```

- *Type:* object

---

##### `PagerdutyInput`<sup>Optional</sup> <a name="PagerdutyInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerdutyInput"></a>

```csharp
public object PagerdutyInput { get; }
```

- *Type:* object

---

##### `WebhooksInput`<sup>Optional</sup> <a name="WebhooksInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooksInput"></a>

```csharp
public object WebhooksInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationPolicyMechanismsPagerdutyList <a name="NotificationPolicyMechanismsPagerdutyList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyMechanismsPagerdutyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.get"></a>

```csharp
private NotificationPolicyMechanismsPagerdutyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationPolicyMechanismsPagerdutyOutputReference <a name="NotificationPolicyMechanismsPagerdutyOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyMechanismsPagerdutyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationPolicyMechanismsWebhooksList <a name="NotificationPolicyMechanismsWebhooksList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyMechanismsWebhooksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.get"></a>

```csharp
private NotificationPolicyMechanismsWebhooksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NotificationPolicyMechanismsWebhooksOutputReference <a name="NotificationPolicyMechanismsWebhooksOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new NotificationPolicyMechanismsWebhooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



