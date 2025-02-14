# `dnsSettings` Submodule <a name="`dnsSettings` Submodule" id="@cdktf/provider-cloudflare.dnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsSettings <a name="DnsSettings" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings cloudflare_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsSettings(Construct Scope, string Id, DnsSettingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig">DnsSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig">DnsSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults">PutZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneDefaults">ResetZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutZoneDefaults` <a name="PutZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults"></a>

```csharp
private void PutZoneDefaults(DnsSettingsZoneDefaults Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetZoneDefaults` <a name="ResetZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneDefaults"></a>

```csharp
private void ResetZoneDefaults()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DnsSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaults">ZoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference">DnsSettingsZoneDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaultsInput">ZoneDefaultsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ZoneDefaults`<sup>Required</sup> <a name="ZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaults"></a>

```csharp
public DnsSettingsZoneDefaultsOutputReference ZoneDefaults { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference">DnsSettingsZoneDefaultsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ZoneDefaultsInput`<sup>Optional</sup> <a name="ZoneDefaultsInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaultsInput"></a>

```csharp
public object ZoneDefaultsInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsSettingsConfig <a name="DnsSettingsConfig" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId = null,
    DnsSettingsZoneDefaults ZoneDefaults = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneDefaults">ZoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#account_id DnsSettings#account_id}

---

##### `ZoneDefaults`<sup>Optional</sup> <a name="ZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneDefaults"></a>

```csharp
public DnsSettingsZoneDefaults ZoneDefaults { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_id DnsSettings#zone_id}

---

### DnsSettingsZoneDefaults <a name="DnsSettingsZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsSettingsZoneDefaults {
    object FlattenAllCnames = null,
    object FoundationDns = null,
    DnsSettingsZoneDefaultsInternalDns InternalDns = null,
    object MultiProvider = null,
    DnsSettingsZoneDefaultsNameservers Nameservers = null,
    double NsTtl = null,
    object SecondaryOverrides = null,
    DnsSettingsZoneDefaultsSoa Soa = null,
    string ZoneMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.flattenAllCnames">FlattenAllCnames</a></code> | <code>object</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.foundationDns">FoundationDns</a></code> | <code>object</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.internalDns">InternalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.multiProvider">MultiProvider</a></code> | <code>object</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nameservers">Nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nsTtl">NsTtl</a></code> | <code>double</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.secondaryOverrides">SecondaryOverrides</a></code> | <code>object</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.soa">Soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.zoneMode">ZoneMode</a></code> | <code>string</code> | Whether the zone mode is a regular or CDN/DNS only zone. |

---

##### `FlattenAllCnames`<sup>Optional</sup> <a name="FlattenAllCnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.flattenAllCnames"></a>

```csharp
public object FlattenAllCnames { get; set; }
```

- *Type:* object

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#flatten_all_cnames DnsSettings#flatten_all_cnames}

---

##### `FoundationDns`<sup>Optional</sup> <a name="FoundationDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.foundationDns"></a>

```csharp
public object FoundationDns { get; set; }
```

- *Type:* object

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#foundation_dns DnsSettings#foundation_dns}

---

##### `InternalDns`<sup>Optional</sup> <a name="InternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.internalDns"></a>

```csharp
public DnsSettingsZoneDefaultsInternalDns InternalDns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#internal_dns DnsSettings#internal_dns}

---

##### `MultiProvider`<sup>Optional</sup> <a name="MultiProvider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.multiProvider"></a>

```csharp
public object MultiProvider { get; set; }
```

- *Type:* object

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#multi_provider DnsSettings#multi_provider}

---

##### `Nameservers`<sup>Optional</sup> <a name="Nameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nameservers"></a>

```csharp
public DnsSettingsZoneDefaultsNameservers Nameservers { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#nameservers DnsSettings#nameservers}

---

##### `NsTtl`<sup>Optional</sup> <a name="NsTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nsTtl"></a>

```csharp
public double NsTtl { get; set; }
```

- *Type:* double

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#ns_ttl DnsSettings#ns_ttl}

---

##### `SecondaryOverrides`<sup>Optional</sup> <a name="SecondaryOverrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.secondaryOverrides"></a>

```csharp
public object SecondaryOverrides { get; set; }
```

- *Type:* object

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#secondary_overrides DnsSettings#secondary_overrides}

---

##### `Soa`<sup>Optional</sup> <a name="Soa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.soa"></a>

```csharp
public DnsSettingsZoneDefaultsSoa Soa { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#soa DnsSettings#soa}

---

##### `ZoneMode`<sup>Optional</sup> <a name="ZoneMode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.zoneMode"></a>

```csharp
public string ZoneMode { get; set; }
```

- *Type:* string

Whether the zone mode is a regular or CDN/DNS only zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_mode DnsSettings#zone_mode}

---

### DnsSettingsZoneDefaultsInternalDns <a name="DnsSettingsZoneDefaultsInternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsSettingsZoneDefaultsInternalDns {
    string ReferenceZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns.property.referenceZoneId">ReferenceZoneId</a></code> | <code>string</code> | The ID of the zone to fallback to. |

---

##### `ReferenceZoneId`<sup>Optional</sup> <a name="ReferenceZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns.property.referenceZoneId"></a>

```csharp
public string ReferenceZoneId { get; set; }
```

- *Type:* string

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#reference_zone_id DnsSettings#reference_zone_id}

---

### DnsSettingsZoneDefaultsNameservers <a name="DnsSettingsZoneDefaultsNameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsSettingsZoneDefaultsNameservers {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers.property.type">Type</a></code> | <code>string</code> | Nameserver type. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Nameserver type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#type DnsSettings#type}

---

### DnsSettingsZoneDefaultsSoa <a name="DnsSettingsZoneDefaultsSoa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsSettingsZoneDefaultsSoa {
    double Expire,
    double MinTtl,
    string Mname,
    double Refresh,
    double Retry,
    string Rname,
    double Ttl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.expire">Expire</a></code> | <code>double</code> | Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.minTtl">MinTtl</a></code> | <code>double</code> | The time to live (TTL) for negative caching of records within the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.mname">Mname</a></code> | <code>string</code> | The primary nameserver, which may be used for outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.refresh">Refresh</a></code> | <code>double</code> | Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.retry">Retry</a></code> | <code>double</code> | Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.rname">Rname</a></code> | <code>string</code> | The email address of the zone administrator, with the first label representing the local part of the email address. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.ttl">Ttl</a></code> | <code>double</code> | The time to live (TTL) of the SOA record itself. |

---

##### `Expire`<sup>Required</sup> <a name="Expire" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.expire"></a>

```csharp
public double Expire { get; set; }
```

- *Type:* double

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#expire DnsSettings#expire}

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.minTtl"></a>

```csharp
public double MinTtl { get; set; }
```

- *Type:* double

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#min_ttl DnsSettings#min_ttl}

---

##### `Mname`<sup>Required</sup> <a name="Mname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.mname"></a>

```csharp
public string Mname { get; set; }
```

- *Type:* string

The primary nameserver, which may be used for outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#mname DnsSettings#mname}

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.refresh"></a>

```csharp
public double Refresh { get; set; }
```

- *Type:* double

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#refresh DnsSettings#refresh}

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.retry"></a>

```csharp
public double Retry { get; set; }
```

- *Type:* double

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#retry DnsSettings#retry}

---

##### `Rname`<sup>Required</sup> <a name="Rname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.rname"></a>

```csharp
public string Rname { get; set; }
```

- *Type:* string

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#rname DnsSettings#rname}

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#ttl DnsSettings#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsSettingsZoneDefaultsInternalDnsOutputReference <a name="DnsSettingsZoneDefaultsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsSettingsZoneDefaultsInternalDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId">ResetReferenceZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReferenceZoneId` <a name="ResetReferenceZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId"></a>

```csharp
private void ResetReferenceZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput">ReferenceZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId">ReferenceZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReferenceZoneIdInput`<sup>Optional</sup> <a name="ReferenceZoneIdInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput"></a>

```csharp
public string ReferenceZoneIdInput { get; }
```

- *Type:* string

---

##### `ReferenceZoneId`<sup>Required</sup> <a name="ReferenceZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId"></a>

```csharp
public string ReferenceZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSettingsZoneDefaultsNameserversOutputReference <a name="DnsSettingsZoneDefaultsNameserversOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsSettingsZoneDefaultsNameserversOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSettingsZoneDefaultsOutputReference <a name="DnsSettingsZoneDefaultsOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsSettingsZoneDefaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putInternalDns">PutInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putNameservers">PutNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa">PutSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames">ResetFlattenAllCnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFoundationDns">ResetFoundationDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetInternalDns">ResetInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetMultiProvider">ResetMultiProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNameservers">ResetNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNsTtl">ResetNsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides">ResetSecondaryOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSoa">ResetSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetZoneMode">ResetZoneMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalDns` <a name="PutInternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putInternalDns"></a>

```csharp
private void PutInternalDns(DnsSettingsZoneDefaultsInternalDns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putInternalDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>

---

##### `PutNameservers` <a name="PutNameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putNameservers"></a>

```csharp
private void PutNameservers(DnsSettingsZoneDefaultsNameservers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putNameservers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>

---

##### `PutSoa` <a name="PutSoa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa"></a>

```csharp
private void PutSoa(DnsSettingsZoneDefaultsSoa Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>

---

##### `ResetFlattenAllCnames` <a name="ResetFlattenAllCnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames"></a>

```csharp
private void ResetFlattenAllCnames()
```

##### `ResetFoundationDns` <a name="ResetFoundationDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFoundationDns"></a>

```csharp
private void ResetFoundationDns()
```

##### `ResetInternalDns` <a name="ResetInternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetInternalDns"></a>

```csharp
private void ResetInternalDns()
```

##### `ResetMultiProvider` <a name="ResetMultiProvider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetMultiProvider"></a>

```csharp
private void ResetMultiProvider()
```

##### `ResetNameservers` <a name="ResetNameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNameservers"></a>

```csharp
private void ResetNameservers()
```

##### `ResetNsTtl` <a name="ResetNsTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNsTtl"></a>

```csharp
private void ResetNsTtl()
```

##### `ResetSecondaryOverrides` <a name="ResetSecondaryOverrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides"></a>

```csharp
private void ResetSecondaryOverrides()
```

##### `ResetSoa` <a name="ResetSoa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSoa"></a>

```csharp
private void ResetSoa()
```

##### `ResetZoneMode` <a name="ResetZoneMode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetZoneMode"></a>

```csharp
private void ResetZoneMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDns">InternalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference">DnsSettingsZoneDefaultsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameservers">Nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference">DnsSettingsZoneDefaultsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soa">Soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference">DnsSettingsZoneDefaultsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput">FlattenAllCnamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput">FoundationDnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDnsInput">InternalDnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProviderInput">MultiProviderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameserversInput">NameserversInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtlInput">NsTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput">SecondaryOverridesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soaInput">SoaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneModeInput">ZoneModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames">FlattenAllCnames</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDns">FoundationDns</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProvider">MultiProvider</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtl">NsTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides">SecondaryOverrides</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneMode">ZoneMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalDns`<sup>Required</sup> <a name="InternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDns"></a>

```csharp
public DnsSettingsZoneDefaultsInternalDnsOutputReference InternalDns { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference">DnsSettingsZoneDefaultsInternalDnsOutputReference</a>

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameservers"></a>

```csharp
public DnsSettingsZoneDefaultsNameserversOutputReference Nameservers { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference">DnsSettingsZoneDefaultsNameserversOutputReference</a>

---

##### `Soa`<sup>Required</sup> <a name="Soa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soa"></a>

```csharp
public DnsSettingsZoneDefaultsSoaOutputReference Soa { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference">DnsSettingsZoneDefaultsSoaOutputReference</a>

---

##### `FlattenAllCnamesInput`<sup>Optional</sup> <a name="FlattenAllCnamesInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput"></a>

```csharp
public object FlattenAllCnamesInput { get; }
```

- *Type:* object

---

##### `FoundationDnsInput`<sup>Optional</sup> <a name="FoundationDnsInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput"></a>

```csharp
public object FoundationDnsInput { get; }
```

- *Type:* object

---

##### `InternalDnsInput`<sup>Optional</sup> <a name="InternalDnsInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDnsInput"></a>

```csharp
public object InternalDnsInput { get; }
```

- *Type:* object

---

##### `MultiProviderInput`<sup>Optional</sup> <a name="MultiProviderInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProviderInput"></a>

```csharp
public object MultiProviderInput { get; }
```

- *Type:* object

---

##### `NameserversInput`<sup>Optional</sup> <a name="NameserversInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameserversInput"></a>

```csharp
public object NameserversInput { get; }
```

- *Type:* object

---

##### `NsTtlInput`<sup>Optional</sup> <a name="NsTtlInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtlInput"></a>

```csharp
public double NsTtlInput { get; }
```

- *Type:* double

---

##### `SecondaryOverridesInput`<sup>Optional</sup> <a name="SecondaryOverridesInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput"></a>

```csharp
public object SecondaryOverridesInput { get; }
```

- *Type:* object

---

##### `SoaInput`<sup>Optional</sup> <a name="SoaInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soaInput"></a>

```csharp
public object SoaInput { get; }
```

- *Type:* object

---

##### `ZoneModeInput`<sup>Optional</sup> <a name="ZoneModeInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneModeInput"></a>

```csharp
public string ZoneModeInput { get; }
```

- *Type:* string

---

##### `FlattenAllCnames`<sup>Required</sup> <a name="FlattenAllCnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames"></a>

```csharp
public object FlattenAllCnames { get; }
```

- *Type:* object

---

##### `FoundationDns`<sup>Required</sup> <a name="FoundationDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDns"></a>

```csharp
public object FoundationDns { get; }
```

- *Type:* object

---

##### `MultiProvider`<sup>Required</sup> <a name="MultiProvider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProvider"></a>

```csharp
public object MultiProvider { get; }
```

- *Type:* object

---

##### `NsTtl`<sup>Required</sup> <a name="NsTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtl"></a>

```csharp
public double NsTtl { get; }
```

- *Type:* double

---

##### `SecondaryOverrides`<sup>Required</sup> <a name="SecondaryOverrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides"></a>

```csharp
public object SecondaryOverrides { get; }
```

- *Type:* object

---

##### `ZoneMode`<sup>Required</sup> <a name="ZoneMode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneMode"></a>

```csharp
public string ZoneMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsSettingsZoneDefaultsSoaOutputReference <a name="DnsSettingsZoneDefaultsSoaOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsSettingsZoneDefaultsSoaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expireInput">ExpireInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput">MinTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput">MnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput">RefreshInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retryInput">RetryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput">RnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expire">Expire</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtl">MinTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mname">Mname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refresh">Refresh</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retry">Retry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rname">Rname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpireInput`<sup>Optional</sup> <a name="ExpireInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expireInput"></a>

```csharp
public double ExpireInput { get; }
```

- *Type:* double

---

##### `MinTtlInput`<sup>Optional</sup> <a name="MinTtlInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput"></a>

```csharp
public double MinTtlInput { get; }
```

- *Type:* double

---

##### `MnameInput`<sup>Optional</sup> <a name="MnameInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput"></a>

```csharp
public string MnameInput { get; }
```

- *Type:* string

---

##### `RefreshInput`<sup>Optional</sup> <a name="RefreshInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput"></a>

```csharp
public double RefreshInput { get; }
```

- *Type:* double

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retryInput"></a>

```csharp
public double RetryInput { get; }
```

- *Type:* double

---

##### `RnameInput`<sup>Optional</sup> <a name="RnameInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput"></a>

```csharp
public string RnameInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `Expire`<sup>Required</sup> <a name="Expire" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expire"></a>

```csharp
public double Expire { get; }
```

- *Type:* double

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtl"></a>

```csharp
public double MinTtl { get; }
```

- *Type:* double

---

##### `Mname`<sup>Required</sup> <a name="Mname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mname"></a>

```csharp
public string Mname { get; }
```

- *Type:* string

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refresh"></a>

```csharp
public double Refresh { get; }
```

- *Type:* double

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retry"></a>

```csharp
public double Retry { get; }
```

- *Type:* double

---

##### `Rname`<sup>Required</sup> <a name="Rname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rname"></a>

```csharp
public string Rname { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



