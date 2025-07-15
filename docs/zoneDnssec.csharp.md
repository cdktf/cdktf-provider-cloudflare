# `zoneDnssec` Submodule <a name="`zoneDnssec` Submodule" id="@cdktf/provider-cloudflare.zoneDnssec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneDnssec <a name="ZoneDnssec" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_dnssec cloudflare_zone_dnssec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneDnssec(Construct Scope, string Id, ZoneDnssecConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig">ZoneDnssecConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig">ZoneDnssecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecMultiSigner">ResetDnssecMultiSigner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecPresigned">ResetDnssecPresigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecUseNsec3">ResetDnssecUseNsec3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDnssecMultiSigner` <a name="ResetDnssecMultiSigner" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecMultiSigner"></a>

```csharp
private void ResetDnssecMultiSigner()
```

##### `ResetDnssecPresigned` <a name="ResetDnssecPresigned" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecPresigned"></a>

```csharp
private void ResetDnssecPresigned()
```

##### `ResetDnssecUseNsec3` <a name="ResetDnssecUseNsec3" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecUseNsec3"></a>

```csharp
private void ResetDnssecUseNsec3()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneDnssec resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneDnssec.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneDnssec.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneDnssec.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneDnssec.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZoneDnssec resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZoneDnssec to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZoneDnssec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_dnssec#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZoneDnssec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digest">Digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digestAlgorithm">DigestAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digestType">DigestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.ds">Ds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.flags">Flags</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.keyTag">KeyTag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecMultiSignerInput">DnssecMultiSignerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecPresignedInput">DnssecPresignedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecUseNsec3Input">DnssecUseNsec3Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecMultiSigner">DnssecMultiSigner</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecPresigned">DnssecPresigned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecUseNsec3">DnssecUseNsec3</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digest"></a>

```csharp
public string Digest { get; }
```

- *Type:* string

---

##### `DigestAlgorithm`<sup>Required</sup> <a name="DigestAlgorithm" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digestAlgorithm"></a>

```csharp
public string DigestAlgorithm { get; }
```

- *Type:* string

---

##### `DigestType`<sup>Required</sup> <a name="DigestType" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digestType"></a>

```csharp
public string DigestType { get; }
```

- *Type:* string

---

##### `Ds`<sup>Required</sup> <a name="Ds" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.ds"></a>

```csharp
public string Ds { get; }
```

- *Type:* string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.flags"></a>

```csharp
public double Flags { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.keyTag"></a>

```csharp
public double KeyTag { get; }
```

- *Type:* double

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `DnssecMultiSignerInput`<sup>Optional</sup> <a name="DnssecMultiSignerInput" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecMultiSignerInput"></a>

```csharp
public object DnssecMultiSignerInput { get; }
```

- *Type:* object

---

##### `DnssecPresignedInput`<sup>Optional</sup> <a name="DnssecPresignedInput" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecPresignedInput"></a>

```csharp
public object DnssecPresignedInput { get; }
```

- *Type:* object

---

##### `DnssecUseNsec3Input`<sup>Optional</sup> <a name="DnssecUseNsec3Input" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecUseNsec3Input"></a>

```csharp
public object DnssecUseNsec3Input { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `DnssecMultiSigner`<sup>Required</sup> <a name="DnssecMultiSigner" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecMultiSigner"></a>

```csharp
public object DnssecMultiSigner { get; }
```

- *Type:* object

---

##### `DnssecPresigned`<sup>Required</sup> <a name="DnssecPresigned" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecPresigned"></a>

```csharp
public object DnssecPresigned { get; }
```

- *Type:* object

---

##### `DnssecUseNsec3`<sup>Required</sup> <a name="DnssecUseNsec3" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecUseNsec3"></a>

```csharp
public object DnssecUseNsec3 { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneDnssecConfig <a name="ZoneDnssecConfig" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneDnssecConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ZoneId,
    object DnssecMultiSigner = null,
    object DnssecPresigned = null,
    object DnssecUseNsec3 = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecMultiSigner">DnssecMultiSigner</a></code> | <code>object</code> | If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers to serve a DNSSEC-signed zone at the same time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecPresigned">DnssecPresigned</a></code> | <code>object</code> | If true, allows Cloudflare to transfer in a DNSSEC-signed zone including signatures from an external provider, without requiring Cloudflare to sign any records on the fly. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecUseNsec3">DnssecUseNsec3</a></code> | <code>object</code> | If true, enables the use of NSEC3 together with DNSSEC on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.status">Status</a></code> | <code>string</code> | Status of DNSSEC, based on user-desired state and presence of necessary records. Available values: "active", "disabled". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_dnssec#zone_id ZoneDnssec#zone_id}

---

##### `DnssecMultiSigner`<sup>Optional</sup> <a name="DnssecMultiSigner" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecMultiSigner"></a>

```csharp
public object DnssecMultiSigner { get; set; }
```

- *Type:* object

If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers to serve a DNSSEC-signed zone at the same time.

This is required for DNSKEY records (except those automatically
generated by Cloudflare) to be added to the zone.

See [Multi-signer DNSSEC](https://developers.cloudflare.com/dns/dnssec/multi-signer-dnssec/) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_dnssec#dnssec_multi_signer ZoneDnssec#dnssec_multi_signer}

---

##### `DnssecPresigned`<sup>Optional</sup> <a name="DnssecPresigned" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecPresigned"></a>

```csharp
public object DnssecPresigned { get; set; }
```

- *Type:* object

If true, allows Cloudflare to transfer in a DNSSEC-signed zone including signatures from an external provider, without requiring Cloudflare to sign any records on the fly.

Note that this feature has some limitations.
See [Cloudflare as Secondary](https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/setup/#dnssec) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_dnssec#dnssec_presigned ZoneDnssec#dnssec_presigned}

---

##### `DnssecUseNsec3`<sup>Optional</sup> <a name="DnssecUseNsec3" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecUseNsec3"></a>

```csharp
public object DnssecUseNsec3 { get; set; }
```

- *Type:* object

If true, enables the use of NSEC3 together with DNSSEC on the zone.

Combined with setting dnssec_presigned to true, this enables the use of
NSEC3 records when transferring in from an external provider.
If dnssec_presigned is instead set to false (default), NSEC3 records will be
generated and signed at request time.

See [DNSSEC with NSEC3](https://developers.cloudflare.com/dns/dnssec/enable-nsec3/) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_dnssec#dnssec_use_nsec3 ZoneDnssec#dnssec_use_nsec3}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Status of DNSSEC, based on user-desired state and presence of necessary records. Available values: "active", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zone_dnssec#status ZoneDnssec#status}

---



