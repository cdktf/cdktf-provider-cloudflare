# `magicNetworkMonitoringRule` Submodule <a name="`magicNetworkMonitoringRule` Submodule" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicNetworkMonitoringRule <a name="MagicNetworkMonitoringRule" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicNetworkMonitoringRule(Construct Scope, string Id, MagicNetworkMonitoringRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig">MagicNetworkMonitoringRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig">MagicNetworkMonitoringRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetAutomaticAdvertisement">ResetAutomaticAdvertisement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPacketThreshold">ResetPacketThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPrefixes">ResetPrefixes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutomaticAdvertisement` <a name="ResetAutomaticAdvertisement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetAutomaticAdvertisement"></a>

```csharp
private void ResetAutomaticAdvertisement()
```

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetBandwidth"></a>

```csharp
private void ResetBandwidth()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetPacketThreshold` <a name="ResetPacketThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPacketThreshold"></a>

```csharp
private void ResetPacketThreshold()
```

##### `ResetPrefixes` <a name="ResetPrefixes" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPrefixes"></a>

```csharp
private void ResetPrefixes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicNetworkMonitoringRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicNetworkMonitoringRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicNetworkMonitoringRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicNetworkMonitoringRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicNetworkMonitoringRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicNetworkMonitoringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MagicNetworkMonitoringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthThreshold">BandwidthThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixMatch">PrefixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreSensitivity">ZscoreSensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreTarget">ZscoreTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisementInput">AutomaticAdvertisementInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthInput">BandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThresholdInput">PacketThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixesInput">PrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisement">AutomaticAdvertisement</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidth">Bandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThreshold">PacketThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixes">Prefixes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BandwidthThreshold`<sup>Required</sup> <a name="BandwidthThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthThreshold"></a>

```csharp
public double BandwidthThreshold { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrefixMatch`<sup>Required</sup> <a name="PrefixMatch" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixMatch"></a>

```csharp
public string PrefixMatch { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ZscoreSensitivity`<sup>Required</sup> <a name="ZscoreSensitivity" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreSensitivity"></a>

```csharp
public string ZscoreSensitivity { get; }
```

- *Type:* string

---

##### `ZscoreTarget`<sup>Required</sup> <a name="ZscoreTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreTarget"></a>

```csharp
public string ZscoreTarget { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AutomaticAdvertisementInput`<sup>Optional</sup> <a name="AutomaticAdvertisementInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisementInput"></a>

```csharp
public bool|IResolvable AutomaticAdvertisementInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthInput"></a>

```csharp
public double BandwidthInput { get; }
```

- *Type:* double

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PacketThresholdInput`<sup>Optional</sup> <a name="PacketThresholdInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThresholdInput"></a>

```csharp
public double PacketThresholdInput { get; }
```

- *Type:* double

---

##### `PrefixesInput`<sup>Optional</sup> <a name="PrefixesInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixesInput"></a>

```csharp
public string[] PrefixesInput { get; }
```

- *Type:* string[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AutomaticAdvertisement`<sup>Required</sup> <a name="AutomaticAdvertisement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisement"></a>

```csharp
public bool|IResolvable AutomaticAdvertisement { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidth"></a>

```csharp
public double Bandwidth { get; }
```

- *Type:* double

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PacketThreshold`<sup>Required</sup> <a name="PacketThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThreshold"></a>

```csharp
public double PacketThreshold { get; }
```

- *Type:* double

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixes"></a>

```csharp
public string[] Prefixes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicNetworkMonitoringRuleConfig <a name="MagicNetworkMonitoringRuleConfig" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicNetworkMonitoringRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Name,
    bool|IResolvable AutomaticAdvertisement = null,
    double Bandwidth = null,
    string Duration = null,
    double PacketThreshold = null,
    string[] Prefixes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.automaticAdvertisement">AutomaticAdvertisement</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.bandwidth">Bandwidth</a></code> | <code>double</code> | The number of bits per second for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.duration">Duration</a></code> | <code>string</code> | The amount of time that the rule threshold must be exceeded to send an alert notification. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.packetThreshold">PacketThreshold</a></code> | <code>double</code> | The number of packets per second for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.prefixes">Prefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the rule.

Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_network_monitoring_rule#name MagicNetworkMonitoringRule#name}

---

##### `AutomaticAdvertisement`<sup>Optional</sup> <a name="AutomaticAdvertisement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.automaticAdvertisement"></a>

```csharp
public bool|IResolvable AutomaticAdvertisement { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered.

Only available for users of Magic Transit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_network_monitoring_rule#automatic_advertisement MagicNetworkMonitoringRule#automatic_advertisement}

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.bandwidth"></a>

```csharp
public double Bandwidth { get; set; }
```

- *Type:* double

The number of bits per second for the rule.

When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_network_monitoring_rule#bandwidth MagicNetworkMonitoringRule#bandwidth}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The amount of time that the rule threshold must be exceeded to send an alert notification.

The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].
Available values: "1m", "5m", "10m", "15m", "20m", "30m", "45m", "60m".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_network_monitoring_rule#duration MagicNetworkMonitoringRule#duration}

---

##### `PacketThreshold`<sup>Optional</sup> <a name="PacketThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.packetThreshold"></a>

```csharp
public double PacketThreshold { get; set; }
```

- *Type:* double

The number of packets per second for the rule.

When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_network_monitoring_rule#packet_threshold MagicNetworkMonitoringRule#packet_threshold}

---

##### `Prefixes`<sup>Optional</sup> <a name="Prefixes" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.prefixes"></a>

```csharp
public string[] Prefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}.

---



