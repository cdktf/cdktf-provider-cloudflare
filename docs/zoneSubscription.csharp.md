# `zoneSubscription` Submodule <a name="`zoneSubscription` Submodule" id="@cdktf/provider-cloudflare.zoneSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneSubscription <a name="ZoneSubscription" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_subscription cloudflare_zone_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSubscription(Construct Scope, string Id, ZoneSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig">ZoneSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig">ZoneSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan">PutRatePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetRatePlan">ResetRatePlan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRatePlan` <a name="PutRatePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan"></a>

```csharp
private void PutRatePlan(ZoneSubscriptionRatePlan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

---

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetRatePlan` <a name="ResetRatePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetRatePlan"></a>

```csharp
private void ResetRatePlan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZoneSubscription resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZoneSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZoneSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZoneSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currency">Currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodEnd">CurrentPeriodEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodStart">CurrentPeriodStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.price">Price</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlan">RatePlan</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference">ZoneSubscriptionRatePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlanInput">RatePlanInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currency"></a>

```csharp
public string Currency { get; }
```

- *Type:* string

---

##### `CurrentPeriodEnd`<sup>Required</sup> <a name="CurrentPeriodEnd" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodEnd"></a>

```csharp
public string CurrentPeriodEnd { get; }
```

- *Type:* string

---

##### `CurrentPeriodStart`<sup>Required</sup> <a name="CurrentPeriodStart" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodStart"></a>

```csharp
public string CurrentPeriodStart { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Price`<sup>Required</sup> <a name="Price" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.price"></a>

```csharp
public double Price { get; }
```

- *Type:* double

---

##### `RatePlan`<sup>Required</sup> <a name="RatePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlan"></a>

```csharp
public ZoneSubscriptionRatePlanOutputReference RatePlan { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference">ZoneSubscriptionRatePlanOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `RatePlanInput`<sup>Optional</sup> <a name="RatePlanInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlanInput"></a>

```csharp
public object RatePlanInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneSubscriptionConfig <a name="ZoneSubscriptionConfig" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ZoneId,
    string Frequency = null,
    ZoneSubscriptionRatePlan RatePlan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Subscription identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.frequency">Frequency</a></code> | <code>string</code> | How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.ratePlan">RatePlan</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a></code> | The rate plan applied to the subscription. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Subscription identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_subscription#zone_id ZoneSubscription#zone_id}

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_subscription#frequency ZoneSubscription#frequency}

---

##### `RatePlan`<sup>Optional</sup> <a name="RatePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.ratePlan"></a>

```csharp
public ZoneSubscriptionRatePlan RatePlan { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

The rate plan applied to the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_subscription#rate_plan ZoneSubscription#rate_plan}

---

### ZoneSubscriptionRatePlan <a name="ZoneSubscriptionRatePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSubscriptionRatePlan {
    string Currency = null,
    object ExternallyManaged = null,
    string Id = null,
    object IsContract = null,
    string PublicName = null,
    string Scope = null,
    string[] Sets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.currency">Currency</a></code> | <code>string</code> | The currency applied to the rate plan subscription. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.externallyManaged">ExternallyManaged</a></code> | <code>object</code> | Whether this rate plan is managed externally from Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.id">Id</a></code> | <code>string</code> | The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.isContract">IsContract</a></code> | <code>object</code> | Whether a rate plan is enterprise-based (or newly adopted term contract). |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.publicName">PublicName</a></code> | <code>string</code> | The full name of the rate plan. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.scope">Scope</a></code> | <code>string</code> | The scope that this rate plan applies to. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.sets">Sets</a></code> | <code>string[]</code> | The list of sets this rate plan applies to. |

---

##### `Currency`<sup>Optional</sup> <a name="Currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.currency"></a>

```csharp
public string Currency { get; set; }
```

- *Type:* string

The currency applied to the rate plan subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_subscription#currency ZoneSubscription#currency}

---

##### `ExternallyManaged`<sup>Optional</sup> <a name="ExternallyManaged" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.externallyManaged"></a>

```csharp
public object ExternallyManaged { get; set; }
```

- *Type:* object

Whether this rate plan is managed externally from Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_subscription#externally_managed ZoneSubscription#externally_managed}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_subscription#id ZoneSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsContract`<sup>Optional</sup> <a name="IsContract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.isContract"></a>

```csharp
public object IsContract { get; set; }
```

- *Type:* object

Whether a rate plan is enterprise-based (or newly adopted term contract).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_subscription#is_contract ZoneSubscription#is_contract}

---

##### `PublicName`<sup>Optional</sup> <a name="PublicName" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.publicName"></a>

```csharp
public string PublicName { get; set; }
```

- *Type:* string

The full name of the rate plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_subscription#public_name ZoneSubscription#public_name}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

The scope that this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_subscription#scope ZoneSubscription#scope}

---

##### `Sets`<sup>Optional</sup> <a name="Sets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.sets"></a>

```csharp
public string[] Sets { get; set; }
```

- *Type:* string[]

The list of sets this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_subscription#sets ZoneSubscription#sets}

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneSubscriptionRatePlanOutputReference <a name="ZoneSubscriptionRatePlanOutputReference" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneSubscriptionRatePlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetCurrency">ResetCurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetExternallyManaged">ResetExternallyManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetIsContract">ResetIsContract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetPublicName">ResetPublicName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetSets">ResetSets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurrency` <a name="ResetCurrency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetCurrency"></a>

```csharp
private void ResetCurrency()
```

##### `ResetExternallyManaged` <a name="ResetExternallyManaged" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetExternallyManaged"></a>

```csharp
private void ResetExternallyManaged()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsContract` <a name="ResetIsContract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetIsContract"></a>

```csharp
private void ResetIsContract()
```

##### `ResetPublicName` <a name="ResetPublicName" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetPublicName"></a>

```csharp
private void ResetPublicName()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSets` <a name="ResetSets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetSets"></a>

```csharp
private void ResetSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currencyInput">CurrencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManagedInput">ExternallyManagedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContractInput">IsContractInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicNameInput">PublicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.setsInput">SetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currency">Currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManaged">ExternallyManaged</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContract">IsContract</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicName">PublicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.sets">Sets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrencyInput`<sup>Optional</sup> <a name="CurrencyInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currencyInput"></a>

```csharp
public string CurrencyInput { get; }
```

- *Type:* string

---

##### `ExternallyManagedInput`<sup>Optional</sup> <a name="ExternallyManagedInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManagedInput"></a>

```csharp
public object ExternallyManagedInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsContractInput`<sup>Optional</sup> <a name="IsContractInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContractInput"></a>

```csharp
public object IsContractInput { get; }
```

- *Type:* object

---

##### `PublicNameInput`<sup>Optional</sup> <a name="PublicNameInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicNameInput"></a>

```csharp
public string PublicNameInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SetsInput`<sup>Optional</sup> <a name="SetsInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.setsInput"></a>

```csharp
public string[] SetsInput { get; }
```

- *Type:* string[]

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currency"></a>

```csharp
public string Currency { get; }
```

- *Type:* string

---

##### `ExternallyManaged`<sup>Required</sup> <a name="ExternallyManaged" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManaged"></a>

```csharp
public object ExternallyManaged { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsContract`<sup>Required</sup> <a name="IsContract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContract"></a>

```csharp
public object IsContract { get; }
```

- *Type:* object

---

##### `PublicName`<sup>Required</sup> <a name="PublicName" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicName"></a>

```csharp
public string PublicName { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Sets`<sup>Required</sup> <a name="Sets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.sets"></a>

```csharp
public string[] Sets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



