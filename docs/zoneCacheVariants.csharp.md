# `zoneCacheVariants` Submodule <a name="`zoneCacheVariants` Submodule" id="@cdktf/provider-cloudflare.zoneCacheVariants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneCacheVariants <a name="ZoneCacheVariants" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneCacheVariants(Construct Scope, string Id, ZoneCacheVariantsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig">ZoneCacheVariantsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig">ZoneCacheVariantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue">PutValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutValue` <a name="PutValue" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue"></a>

```csharp
private void PutValue(ZoneCacheVariantsValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneCacheVariants.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneCacheVariants.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneCacheVariants.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZoneCacheVariants.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZoneCacheVariants to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZoneCacheVariants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZoneCacheVariants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.editable">Editable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.value">Value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference">ZoneCacheVariantsValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.valueInput">ValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Editable`<sup>Required</sup> <a name="Editable" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.editable"></a>

```csharp
public IResolvable Editable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.value"></a>

```csharp
public ZoneCacheVariantsValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference">ZoneCacheVariantsValueOutputReference</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.valueInput"></a>

```csharp
public object ValueInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneCacheVariantsConfig <a name="ZoneCacheVariantsConfig" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneCacheVariantsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ZoneCacheVariantsValue Value,
    string ZoneId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.value">Value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a></code> | Value of the zone setting. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.value"></a>

```csharp
public ZoneCacheVariantsValue Value { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

Value of the zone setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#value ZoneCacheVariants#value}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#zone_id ZoneCacheVariants#zone_id}

---

### ZoneCacheVariantsValue <a name="ZoneCacheVariantsValue" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneCacheVariantsValue {
    string[] Avif = null,
    string[] Bmp = null,
    string[] Gif = null,
    string[] Jp2 = null,
    string[] Jpeg = null,
    string[] Jpg = null,
    string[] Jpg2 = null,
    string[] Png = null,
    string[] Tif = null,
    string[] Tiff = null,
    string[] Webp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.avif">Avif</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for avif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.bmp">Bmp</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for bmp. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.gif">Gif</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for gif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jp2">Jp2</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for jp2. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpeg">Jpeg</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for jpeg. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg">Jpg</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for jpg. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg2">Jpg2</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for jpg2. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.png">Png</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for png. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tif">Tif</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for tif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tiff">Tiff</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for tiff. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.webp">Webp</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for webp. |

---

##### `Avif`<sup>Optional</sup> <a name="Avif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.avif"></a>

```csharp
public string[] Avif { get; set; }
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for avif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#avif ZoneCacheVariants#avif}

---

##### `Bmp`<sup>Optional</sup> <a name="Bmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.bmp"></a>

```csharp
public string[] Bmp { get; set; }
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for bmp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#bmp ZoneCacheVariants#bmp}

---

##### `Gif`<sup>Optional</sup> <a name="Gif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.gif"></a>

```csharp
public string[] Gif { get; set; }
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for gif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#gif ZoneCacheVariants#gif}

---

##### `Jp2`<sup>Optional</sup> <a name="Jp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jp2"></a>

```csharp
public string[] Jp2 { get; set; }
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for jp2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#jp2 ZoneCacheVariants#jp2}

---

##### `Jpeg`<sup>Optional</sup> <a name="Jpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpeg"></a>

```csharp
public string[] Jpeg { get; set; }
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for jpeg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#jpeg ZoneCacheVariants#jpeg}

---

##### `Jpg`<sup>Optional</sup> <a name="Jpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg"></a>

```csharp
public string[] Jpg { get; set; }
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for jpg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#jpg ZoneCacheVariants#jpg}

---

##### `Jpg2`<sup>Optional</sup> <a name="Jpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg2"></a>

```csharp
public string[] Jpg2 { get; set; }
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for jpg2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#jpg2 ZoneCacheVariants#jpg2}

---

##### `Png`<sup>Optional</sup> <a name="Png" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.png"></a>

```csharp
public string[] Png { get; set; }
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#png ZoneCacheVariants#png}

---

##### `Tif`<sup>Optional</sup> <a name="Tif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tif"></a>

```csharp
public string[] Tif { get; set; }
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for tif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#tif ZoneCacheVariants#tif}

---

##### `Tiff`<sup>Optional</sup> <a name="Tiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tiff"></a>

```csharp
public string[] Tiff { get; set; }
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for tiff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#tiff ZoneCacheVariants#tiff}

---

##### `Webp`<sup>Optional</sup> <a name="Webp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.webp"></a>

```csharp
public string[] Webp { get; set; }
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zone_cache_variants#webp ZoneCacheVariants#webp}

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneCacheVariantsValueOutputReference <a name="ZoneCacheVariantsValueOutputReference" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZoneCacheVariantsValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetAvif">ResetAvif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetBmp">ResetBmp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetGif">ResetGif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJp2">ResetJp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpeg">ResetJpeg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg">ResetJpg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg2">ResetJpg2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetPng">ResetPng</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTif">ResetTif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTiff">ResetTiff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetWebp">ResetWebp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvif` <a name="ResetAvif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetAvif"></a>

```csharp
private void ResetAvif()
```

##### `ResetBmp` <a name="ResetBmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetBmp"></a>

```csharp
private void ResetBmp()
```

##### `ResetGif` <a name="ResetGif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetGif"></a>

```csharp
private void ResetGif()
```

##### `ResetJp2` <a name="ResetJp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJp2"></a>

```csharp
private void ResetJp2()
```

##### `ResetJpeg` <a name="ResetJpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpeg"></a>

```csharp
private void ResetJpeg()
```

##### `ResetJpg` <a name="ResetJpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg"></a>

```csharp
private void ResetJpg()
```

##### `ResetJpg2` <a name="ResetJpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg2"></a>

```csharp
private void ResetJpg2()
```

##### `ResetPng` <a name="ResetPng" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetPng"></a>

```csharp
private void ResetPng()
```

##### `ResetTif` <a name="ResetTif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTif"></a>

```csharp
private void ResetTif()
```

##### `ResetTiff` <a name="ResetTiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTiff"></a>

```csharp
private void ResetTiff()
```

##### `ResetWebp` <a name="ResetWebp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetWebp"></a>

```csharp
private void ResetWebp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avifInput">AvifInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmpInput">BmpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gifInput">GifInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2Input">Jp2Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpegInput">JpegInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2Input">Jpg2Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpgInput">JpgInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.pngInput">PngInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiffInput">TiffInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tifInput">TifInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webpInput">WebpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avif">Avif</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmp">Bmp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gif">Gif</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2">Jp2</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpeg">Jpeg</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg">Jpg</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2">Jpg2</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.png">Png</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tif">Tif</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiff">Tiff</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webp">Webp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvifInput`<sup>Optional</sup> <a name="AvifInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avifInput"></a>

```csharp
public string[] AvifInput { get; }
```

- *Type:* string[]

---

##### `BmpInput`<sup>Optional</sup> <a name="BmpInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmpInput"></a>

```csharp
public string[] BmpInput { get; }
```

- *Type:* string[]

---

##### `GifInput`<sup>Optional</sup> <a name="GifInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gifInput"></a>

```csharp
public string[] GifInput { get; }
```

- *Type:* string[]

---

##### `Jp2Input`<sup>Optional</sup> <a name="Jp2Input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2Input"></a>

```csharp
public string[] Jp2Input { get; }
```

- *Type:* string[]

---

##### `JpegInput`<sup>Optional</sup> <a name="JpegInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpegInput"></a>

```csharp
public string[] JpegInput { get; }
```

- *Type:* string[]

---

##### `Jpg2Input`<sup>Optional</sup> <a name="Jpg2Input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2Input"></a>

```csharp
public string[] Jpg2Input { get; }
```

- *Type:* string[]

---

##### `JpgInput`<sup>Optional</sup> <a name="JpgInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpgInput"></a>

```csharp
public string[] JpgInput { get; }
```

- *Type:* string[]

---

##### `PngInput`<sup>Optional</sup> <a name="PngInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.pngInput"></a>

```csharp
public string[] PngInput { get; }
```

- *Type:* string[]

---

##### `TiffInput`<sup>Optional</sup> <a name="TiffInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiffInput"></a>

```csharp
public string[] TiffInput { get; }
```

- *Type:* string[]

---

##### `TifInput`<sup>Optional</sup> <a name="TifInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tifInput"></a>

```csharp
public string[] TifInput { get; }
```

- *Type:* string[]

---

##### `WebpInput`<sup>Optional</sup> <a name="WebpInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webpInput"></a>

```csharp
public string[] WebpInput { get; }
```

- *Type:* string[]

---

##### `Avif`<sup>Required</sup> <a name="Avif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avif"></a>

```csharp
public string[] Avif { get; }
```

- *Type:* string[]

---

##### `Bmp`<sup>Required</sup> <a name="Bmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmp"></a>

```csharp
public string[] Bmp { get; }
```

- *Type:* string[]

---

##### `Gif`<sup>Required</sup> <a name="Gif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gif"></a>

```csharp
public string[] Gif { get; }
```

- *Type:* string[]

---

##### `Jp2`<sup>Required</sup> <a name="Jp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2"></a>

```csharp
public string[] Jp2 { get; }
```

- *Type:* string[]

---

##### `Jpeg`<sup>Required</sup> <a name="Jpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpeg"></a>

```csharp
public string[] Jpeg { get; }
```

- *Type:* string[]

---

##### `Jpg`<sup>Required</sup> <a name="Jpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg"></a>

```csharp
public string[] Jpg { get; }
```

- *Type:* string[]

---

##### `Jpg2`<sup>Required</sup> <a name="Jpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2"></a>

```csharp
public string[] Jpg2 { get; }
```

- *Type:* string[]

---

##### `Png`<sup>Required</sup> <a name="Png" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.png"></a>

```csharp
public string[] Png { get; }
```

- *Type:* string[]

---

##### `Tif`<sup>Required</sup> <a name="Tif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tif"></a>

```csharp
public string[] Tif { get; }
```

- *Type:* string[]

---

##### `Tiff`<sup>Required</sup> <a name="Tiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiff"></a>

```csharp
public string[] Tiff { get; }
```

- *Type:* string[]

---

##### `Webp`<sup>Required</sup> <a name="Webp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webp"></a>

```csharp
public string[] Webp { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



