# `teamsLocation` Submodule <a name="`teamsLocation` Submodule" id="@cdktf/provider-cloudflare.teamsLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsLocation <a name="TeamsLocation" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location cloudflare_teams_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocation(Construct Scope, string Id, TeamsLocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig">TeamsLocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig">TeamsLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetClientDefault">ResetClientDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetDnsDestinationIpsId">ResetDnsDestinationIpsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetDnsDestinationIpv6BlockId">ResetDnsDestinationIpv6BlockId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetEcsSupport">ResetEcsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetEndpoints">ResetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoints` <a name="PutEndpoints" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.putEndpoints"></a>

```csharp
private void PutEndpoints(TeamsLocationEndpoints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.putEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints">TeamsLocationEndpoints</a>

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.putNetworks"></a>

```csharp
private void PutNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.putNetworks.parameter.value"></a>

- *Type:* object

---

##### `ResetClientDefault` <a name="ResetClientDefault" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetClientDefault"></a>

```csharp
private void ResetClientDefault()
```

##### `ResetDnsDestinationIpsId` <a name="ResetDnsDestinationIpsId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetDnsDestinationIpsId"></a>

```csharp
private void ResetDnsDestinationIpsId()
```

##### `ResetDnsDestinationIpv6BlockId` <a name="ResetDnsDestinationIpv6BlockId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetDnsDestinationIpv6BlockId"></a>

```csharp
private void ResetDnsDestinationIpv6BlockId()
```

##### `ResetEcsSupport` <a name="ResetEcsSupport" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetEcsSupport"></a>

```csharp
private void ResetEcsSupport()
```

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetEndpoints"></a>

```csharp
private void ResetEndpoints()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.resetNetworks"></a>

```csharp
private void ResetNetworks()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TeamsLocation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsLocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsLocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsLocation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsLocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TeamsLocation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TeamsLocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TeamsLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TeamsLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.anonymizedLogsEnabled">AnonymizedLogsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.dohSubdomain">DohSubdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference">TeamsLocationEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.ipv4Destination">Ipv4Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.ipv4DestinationBackup">Ipv4DestinationBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList">TeamsLocationNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.clientDefaultInput">ClientDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.dnsDestinationIpsIdInput">DnsDestinationIpsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.dnsDestinationIpv6BlockIdInput">DnsDestinationIpv6BlockIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.ecsSupportInput">EcsSupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.endpointsInput">EndpointsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints">TeamsLocationEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.networksInput">NetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.clientDefault">ClientDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.dnsDestinationIpsId">DnsDestinationIpsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.dnsDestinationIpv6BlockId">DnsDestinationIpv6BlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.ecsSupport">EcsSupport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AnonymizedLogsEnabled`<sup>Required</sup> <a name="AnonymizedLogsEnabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.anonymizedLogsEnabled"></a>

```csharp
public IResolvable AnonymizedLogsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DohSubdomain`<sup>Required</sup> <a name="DohSubdomain" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.dohSubdomain"></a>

```csharp
public string DohSubdomain { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.endpoints"></a>

```csharp
public TeamsLocationEndpointsOutputReference Endpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference">TeamsLocationEndpointsOutputReference</a>

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Ipv4Destination`<sup>Required</sup> <a name="Ipv4Destination" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.ipv4Destination"></a>

```csharp
public string Ipv4Destination { get; }
```

- *Type:* string

---

##### `Ipv4DestinationBackup`<sup>Required</sup> <a name="Ipv4DestinationBackup" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.ipv4DestinationBackup"></a>

```csharp
public string Ipv4DestinationBackup { get; }
```

- *Type:* string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.networks"></a>

```csharp
public TeamsLocationNetworksList Networks { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList">TeamsLocationNetworksList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ClientDefaultInput`<sup>Optional</sup> <a name="ClientDefaultInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.clientDefaultInput"></a>

```csharp
public object ClientDefaultInput { get; }
```

- *Type:* object

---

##### `DnsDestinationIpsIdInput`<sup>Optional</sup> <a name="DnsDestinationIpsIdInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.dnsDestinationIpsIdInput"></a>

```csharp
public string DnsDestinationIpsIdInput { get; }
```

- *Type:* string

---

##### `DnsDestinationIpv6BlockIdInput`<sup>Optional</sup> <a name="DnsDestinationIpv6BlockIdInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.dnsDestinationIpv6BlockIdInput"></a>

```csharp
public string DnsDestinationIpv6BlockIdInput { get; }
```

- *Type:* string

---

##### `EcsSupportInput`<sup>Optional</sup> <a name="EcsSupportInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.ecsSupportInput"></a>

```csharp
public object EcsSupportInput { get; }
```

- *Type:* object

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.endpointsInput"></a>

```csharp
public TeamsLocationEndpoints EndpointsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints">TeamsLocationEndpoints</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.networksInput"></a>

```csharp
public object NetworksInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ClientDefault`<sup>Required</sup> <a name="ClientDefault" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.clientDefault"></a>

```csharp
public object ClientDefault { get; }
```

- *Type:* object

---

##### `DnsDestinationIpsId`<sup>Required</sup> <a name="DnsDestinationIpsId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.dnsDestinationIpsId"></a>

```csharp
public string DnsDestinationIpsId { get; }
```

- *Type:* string

---

##### `DnsDestinationIpv6BlockId`<sup>Required</sup> <a name="DnsDestinationIpv6BlockId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.dnsDestinationIpv6BlockId"></a>

```csharp
public string DnsDestinationIpv6BlockId { get; }
```

- *Type:* string

---

##### `EcsSupport`<sup>Required</sup> <a name="EcsSupport" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.ecsSupport"></a>

```csharp
public object EcsSupport { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsLocationConfig <a name="TeamsLocationConfig" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Name,
    object ClientDefault = null,
    string DnsDestinationIpsId = null,
    string DnsDestinationIpv6BlockId = null,
    object EcsSupport = null,
    TeamsLocationEndpoints Endpoints = null,
    string Id = null,
    object Networks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.name">Name</a></code> | <code>string</code> | Name of the teams location. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.clientDefault">ClientDefault</a></code> | <code>object</code> | Indicator that this is the default location. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.dnsDestinationIpsId">DnsDestinationIpsId</a></code> | <code>string</code> | IPv4 binding assigned to this location. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.dnsDestinationIpv6BlockId">DnsDestinationIpv6BlockId</a></code> | <code>string</code> | IPv6 block binding assigned to this location. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.ecsSupport">EcsSupport</a></code> | <code>object</code> | Indicator that this location needs to resolve EDNS queries. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints">TeamsLocationEndpoints</a></code> | endpoints block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#id TeamsLocation#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.networks">Networks</a></code> | <code>object</code> | The networks CIDRs that comprise the location. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#account_id TeamsLocation#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the teams location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#name TeamsLocation#name}

---

##### `ClientDefault`<sup>Optional</sup> <a name="ClientDefault" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.clientDefault"></a>

```csharp
public object ClientDefault { get; set; }
```

- *Type:* object

Indicator that this is the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#client_default TeamsLocation#client_default}

---

##### `DnsDestinationIpsId`<sup>Optional</sup> <a name="DnsDestinationIpsId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.dnsDestinationIpsId"></a>

```csharp
public string DnsDestinationIpsId { get; set; }
```

- *Type:* string

IPv4 binding assigned to this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#dns_destination_ips_id TeamsLocation#dns_destination_ips_id}

---

##### `DnsDestinationIpv6BlockId`<sup>Optional</sup> <a name="DnsDestinationIpv6BlockId" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.dnsDestinationIpv6BlockId"></a>

```csharp
public string DnsDestinationIpv6BlockId { get; set; }
```

- *Type:* string

IPv6 block binding assigned to this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#dns_destination_ipv6_block_id TeamsLocation#dns_destination_ipv6_block_id}

---

##### `EcsSupport`<sup>Optional</sup> <a name="EcsSupport" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.ecsSupport"></a>

```csharp
public object EcsSupport { get; set; }
```

- *Type:* object

Indicator that this location needs to resolve EDNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#ecs_support TeamsLocation#ecs_support}

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.endpoints"></a>

```csharp
public TeamsLocationEndpoints Endpoints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints">TeamsLocationEndpoints</a>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#endpoints TeamsLocation#endpoints}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#id TeamsLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationConfig.property.networks"></a>

```csharp
public object Networks { get; set; }
```

- *Type:* object

The networks CIDRs that comprise the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#networks TeamsLocation#networks}

---

### TeamsLocationEndpoints <a name="TeamsLocationEndpoints" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpoints {
    TeamsLocationEndpointsDoh Doh = null,
    TeamsLocationEndpointsDot Dot = null,
    TeamsLocationEndpointsIpv4 Ipv4 = null,
    TeamsLocationEndpointsIpv6 Ipv6 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints.property.doh">Doh</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh">TeamsLocationEndpointsDoh</a></code> | doh block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints.property.dot">Dot</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot">TeamsLocationEndpointsDot</a></code> | dot block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4">TeamsLocationEndpointsIpv4</a></code> | ipv4 block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6">TeamsLocationEndpointsIpv6</a></code> | ipv6 block. |

---

##### `Doh`<sup>Optional</sup> <a name="Doh" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints.property.doh"></a>

```csharp
public TeamsLocationEndpointsDoh Doh { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh">TeamsLocationEndpointsDoh</a>

doh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#doh TeamsLocation#doh}

---

##### `Dot`<sup>Optional</sup> <a name="Dot" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints.property.dot"></a>

```csharp
public TeamsLocationEndpointsDot Dot { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot">TeamsLocationEndpointsDot</a>

dot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#dot TeamsLocation#dot}

---

##### `Ipv4`<sup>Optional</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints.property.ipv4"></a>

```csharp
public TeamsLocationEndpointsIpv4 Ipv4 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4">TeamsLocationEndpointsIpv4</a>

ipv4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#ipv4 TeamsLocation#ipv4}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints.property.ipv6"></a>

```csharp
public TeamsLocationEndpointsIpv6 Ipv6 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6">TeamsLocationEndpointsIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#ipv6 TeamsLocation#ipv6}

---

### TeamsLocationEndpointsDoh <a name="TeamsLocationEndpointsDoh" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsDoh {
    object Enabled,
    object Networks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#enabled TeamsLocation#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh.property.networks">Networks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#networks TeamsLocation#networks}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#enabled TeamsLocation#enabled}.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh.property.networks"></a>

```csharp
public object Networks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#networks TeamsLocation#networks}.

---

### TeamsLocationEndpointsDohNetworks <a name="TeamsLocationEndpointsDohNetworks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsDohNetworks {
    string Network = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworks.property.network">Network</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#network TeamsLocation#network}. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworks.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#network TeamsLocation#network}.

---

### TeamsLocationEndpointsDot <a name="TeamsLocationEndpointsDot" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsDot {
    object Enabled,
    object Networks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#enabled TeamsLocation#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot.property.networks">Networks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#networks TeamsLocation#networks}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#enabled TeamsLocation#enabled}.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot.property.networks"></a>

```csharp
public object Networks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#networks TeamsLocation#networks}.

---

### TeamsLocationEndpointsDotNetworks <a name="TeamsLocationEndpointsDotNetworks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsDotNetworks {
    string Network = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworks.property.network">Network</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#network TeamsLocation#network}. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworks.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#network TeamsLocation#network}.

---

### TeamsLocationEndpointsIpv4 <a name="TeamsLocationEndpointsIpv4" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsIpv4 {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#enabled TeamsLocation#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#enabled TeamsLocation#enabled}.

---

### TeamsLocationEndpointsIpv6 <a name="TeamsLocationEndpointsIpv6" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsIpv6 {
    object Enabled,
    object Networks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#enabled TeamsLocation#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6.property.networks">Networks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#networks TeamsLocation#networks}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#enabled TeamsLocation#enabled}.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6.property.networks"></a>

```csharp
public object Networks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#networks TeamsLocation#networks}.

---

### TeamsLocationEndpointsIpv6Networks <a name="TeamsLocationEndpointsIpv6Networks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6Networks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6Networks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsIpv6Networks {
    string Network = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6Networks.property.network">Network</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#network TeamsLocation#network}. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6Networks.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#network TeamsLocation#network}.

---

### TeamsLocationNetworks <a name="TeamsLocationNetworks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationNetworks {
    string Network = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworks.property.network">Network</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#network TeamsLocation#network}. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworks.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/teams_location#network TeamsLocation#network}.

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsLocationEndpointsDohNetworksList <a name="TeamsLocationEndpointsDohNetworksList" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsDohNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.get"></a>

```csharp
private TeamsLocationEndpointsDohNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TeamsLocationEndpointsDohNetworksOutputReference <a name="TeamsLocationEndpointsDohNetworksOutputReference" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsDohNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TeamsLocationEndpointsDohOutputReference <a name="TeamsLocationEndpointsDohOutputReference" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsDohOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.putNetworks"></a>

```csharp
private void PutNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.putNetworks.parameter.value"></a>

- *Type:* object

---

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.resetNetworks"></a>

```csharp
private void ResetNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList">TeamsLocationEndpointsDohNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.requireToken">RequireToken</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.networksInput">NetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh">TeamsLocationEndpointsDoh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.authenticationEnabled"></a>

```csharp
public IResolvable AuthenticationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.networks"></a>

```csharp
public TeamsLocationEndpointsDohNetworksList Networks { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohNetworksList">TeamsLocationEndpointsDohNetworksList</a>

---

##### `RequireToken`<sup>Required</sup> <a name="RequireToken" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.requireToken"></a>

```csharp
public IResolvable RequireToken { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.networksInput"></a>

```csharp
public object NetworksInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference.property.internalValue"></a>

```csharp
public TeamsLocationEndpointsDoh InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh">TeamsLocationEndpointsDoh</a>

---


### TeamsLocationEndpointsDotNetworksList <a name="TeamsLocationEndpointsDotNetworksList" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsDotNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.get"></a>

```csharp
private TeamsLocationEndpointsDotNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TeamsLocationEndpointsDotNetworksOutputReference <a name="TeamsLocationEndpointsDotNetworksOutputReference" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsDotNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TeamsLocationEndpointsDotOutputReference <a name="TeamsLocationEndpointsDotOutputReference" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsDotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.putNetworks"></a>

```csharp
private void PutNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.putNetworks.parameter.value"></a>

- *Type:* object

---

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.resetNetworks"></a>

```csharp
private void ResetNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList">TeamsLocationEndpointsDotNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.requireToken">RequireToken</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.networksInput">NetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot">TeamsLocationEndpointsDot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.authenticationEnabled"></a>

```csharp
public IResolvable AuthenticationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.networks"></a>

```csharp
public TeamsLocationEndpointsDotNetworksList Networks { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotNetworksList">TeamsLocationEndpointsDotNetworksList</a>

---

##### `RequireToken`<sup>Required</sup> <a name="RequireToken" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.requireToken"></a>

```csharp
public IResolvable RequireToken { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.networksInput"></a>

```csharp
public object NetworksInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference.property.internalValue"></a>

```csharp
public TeamsLocationEndpointsDot InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot">TeamsLocationEndpointsDot</a>

---


### TeamsLocationEndpointsIpv4OutputReference <a name="TeamsLocationEndpointsIpv4OutputReference" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsIpv4OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4">TeamsLocationEndpointsIpv4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.property.authenticationEnabled"></a>

```csharp
public IResolvable AuthenticationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference.property.internalValue"></a>

```csharp
public TeamsLocationEndpointsIpv4 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4">TeamsLocationEndpointsIpv4</a>

---


### TeamsLocationEndpointsIpv6NetworksList <a name="TeamsLocationEndpointsIpv6NetworksList" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsIpv6NetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.get"></a>

```csharp
private TeamsLocationEndpointsIpv6NetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TeamsLocationEndpointsIpv6NetworksOutputReference <a name="TeamsLocationEndpointsIpv6NetworksOutputReference" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsIpv6NetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TeamsLocationEndpointsIpv6OutputReference <a name="TeamsLocationEndpointsIpv6OutputReference" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsIpv6OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.putNetworks"></a>

```csharp
private void PutNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.putNetworks.parameter.value"></a>

- *Type:* object

---

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.resetNetworks"></a>

```csharp
private void ResetNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList">TeamsLocationEndpointsIpv6NetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.networksInput">NetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6">TeamsLocationEndpointsIpv6</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.authenticationEnabled"></a>

```csharp
public IResolvable AuthenticationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.networks"></a>

```csharp
public TeamsLocationEndpointsIpv6NetworksList Networks { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6NetworksList">TeamsLocationEndpointsIpv6NetworksList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.networksInput"></a>

```csharp
public object NetworksInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference.property.internalValue"></a>

```csharp
public TeamsLocationEndpointsIpv6 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6">TeamsLocationEndpointsIpv6</a>

---


### TeamsLocationEndpointsOutputReference <a name="TeamsLocationEndpointsOutputReference" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.putDoh">PutDoh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.putDot">PutDot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.putIpv4">PutIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.putIpv6">PutIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.resetDoh">ResetDoh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.resetDot">ResetDot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.resetIpv4">ResetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDoh` <a name="PutDoh" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.putDoh"></a>

```csharp
private void PutDoh(TeamsLocationEndpointsDoh Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.putDoh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh">TeamsLocationEndpointsDoh</a>

---

##### `PutDot` <a name="PutDot" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.putDot"></a>

```csharp
private void PutDot(TeamsLocationEndpointsDot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.putDot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot">TeamsLocationEndpointsDot</a>

---

##### `PutIpv4` <a name="PutIpv4" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.putIpv4"></a>

```csharp
private void PutIpv4(TeamsLocationEndpointsIpv4 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4">TeamsLocationEndpointsIpv4</a>

---

##### `PutIpv6` <a name="PutIpv6" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.putIpv6"></a>

```csharp
private void PutIpv6(TeamsLocationEndpointsIpv6 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6">TeamsLocationEndpointsIpv6</a>

---

##### `ResetDoh` <a name="ResetDoh" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.resetDoh"></a>

```csharp
private void ResetDoh()
```

##### `ResetDot` <a name="ResetDot" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.resetDot"></a>

```csharp
private void ResetDot()
```

##### `ResetIpv4` <a name="ResetIpv4" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.resetIpv4"></a>

```csharp
private void ResetIpv4()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.resetIpv6"></a>

```csharp
private void ResetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.doh">Doh</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference">TeamsLocationEndpointsDohOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.dot">Dot</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference">TeamsLocationEndpointsDotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference">TeamsLocationEndpointsIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference">TeamsLocationEndpointsIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.dohInput">DohInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh">TeamsLocationEndpointsDoh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.dotInput">DotInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot">TeamsLocationEndpointsDot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.ipv4Input">Ipv4Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4">TeamsLocationEndpointsIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6">TeamsLocationEndpointsIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints">TeamsLocationEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Doh`<sup>Required</sup> <a name="Doh" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.doh"></a>

```csharp
public TeamsLocationEndpointsDohOutputReference Doh { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDohOutputReference">TeamsLocationEndpointsDohOutputReference</a>

---

##### `Dot`<sup>Required</sup> <a name="Dot" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.dot"></a>

```csharp
public TeamsLocationEndpointsDotOutputReference Dot { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDotOutputReference">TeamsLocationEndpointsDotOutputReference</a>

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.ipv4"></a>

```csharp
public TeamsLocationEndpointsIpv4OutputReference Ipv4 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4OutputReference">TeamsLocationEndpointsIpv4OutputReference</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.ipv6"></a>

```csharp
public TeamsLocationEndpointsIpv6OutputReference Ipv6 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6OutputReference">TeamsLocationEndpointsIpv6OutputReference</a>

---

##### `DohInput`<sup>Optional</sup> <a name="DohInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.dohInput"></a>

```csharp
public TeamsLocationEndpointsDoh DohInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDoh">TeamsLocationEndpointsDoh</a>

---

##### `DotInput`<sup>Optional</sup> <a name="DotInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.dotInput"></a>

```csharp
public TeamsLocationEndpointsDot DotInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsDot">TeamsLocationEndpointsDot</a>

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.ipv4Input"></a>

```csharp
public TeamsLocationEndpointsIpv4 Ipv4Input { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv4">TeamsLocationEndpointsIpv4</a>

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.ipv6Input"></a>

```csharp
public TeamsLocationEndpointsIpv6 Ipv6Input { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsIpv6">TeamsLocationEndpointsIpv6</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpointsOutputReference.property.internalValue"></a>

```csharp
public TeamsLocationEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationEndpoints">TeamsLocationEndpoints</a>

---


### TeamsLocationNetworksList <a name="TeamsLocationNetworksList" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.get"></a>

```csharp
private TeamsLocationNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TeamsLocationNetworksOutputReference <a name="TeamsLocationNetworksOutputReference" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsLocationNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsLocation.TeamsLocationNetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



