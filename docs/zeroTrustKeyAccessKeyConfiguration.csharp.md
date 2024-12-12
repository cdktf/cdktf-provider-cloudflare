# `zeroTrustKeyAccessKeyConfiguration` Submodule <a name="`zeroTrustKeyAccessKeyConfiguration` Submodule" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustKeyAccessKeyConfiguration <a name="ZeroTrustKeyAccessKeyConfiguration" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_key_access_key_configuration cloudflare_zero_trust_key_access_key_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustKeyAccessKeyConfiguration(Construct Scope, string Id, ZeroTrustKeyAccessKeyConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig">ZeroTrustKeyAccessKeyConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig">ZeroTrustKeyAccessKeyConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.resetKeyRotationIntervalDays">ResetKeyRotationIntervalDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyRotationIntervalDays` <a name="ResetKeyRotationIntervalDays" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.resetKeyRotationIntervalDays"></a>

```csharp
private void ResetKeyRotationIntervalDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustKeyAccessKeyConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustKeyAccessKeyConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustKeyAccessKeyConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustKeyAccessKeyConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustKeyAccessKeyConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustKeyAccessKeyConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustKeyAccessKeyConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustKeyAccessKeyConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_key_access_key_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustKeyAccessKeyConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.keyRotationIntervalDaysInput">KeyRotationIntervalDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.keyRotationIntervalDays">KeyRotationIntervalDays</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyRotationIntervalDaysInput`<sup>Optional</sup> <a name="KeyRotationIntervalDaysInput" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.keyRotationIntervalDaysInput"></a>

```csharp
public double KeyRotationIntervalDaysInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyRotationIntervalDays`<sup>Required</sup> <a name="KeyRotationIntervalDays" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.keyRotationIntervalDays"></a>

```csharp
public double KeyRotationIntervalDays { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustKeyAccessKeyConfigurationConfig <a name="ZeroTrustKeyAccessKeyConfigurationConfig" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustKeyAccessKeyConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Id = null,
    double KeyRotationIntervalDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_key_access_key_configuration#id ZeroTrustKeyAccessKeyConfiguration#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.keyRotationIntervalDays">KeyRotationIntervalDays</a></code> | <code>double</code> | Number of days to trigger a rotation of the keys. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_key_access_key_configuration#account_id ZeroTrustKeyAccessKeyConfiguration#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_key_access_key_configuration#id ZeroTrustKeyAccessKeyConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyRotationIntervalDays`<sup>Optional</sup> <a name="KeyRotationIntervalDays" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.keyRotationIntervalDays"></a>

```csharp
public double KeyRotationIntervalDays { get; set; }
```

- *Type:* double

Number of days to trigger a rotation of the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_key_access_key_configuration#key_rotation_interval_days ZeroTrustKeyAccessKeyConfiguration#key_rotation_interval_days}

---



