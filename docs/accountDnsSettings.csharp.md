# `accountDnsSettings` Submodule <a name="`accountDnsSettings` Submodule" id="@cdktf/provider-cloudflare.accountDnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountDnsSettings <a name="AccountDnsSettings" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings cloudflare_account_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccountDnsSettings(Construct Scope, string Id, AccountDnsSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig">AccountDnsSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig">AccountDnsSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults">PutZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetZoneDefaults">ResetZoneDefaults</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutZoneDefaults` <a name="PutZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults"></a>

```csharp
private void PutZoneDefaults(AccountDnsSettingsZoneDefaults Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

---

##### `ResetZoneDefaults` <a name="ResetZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetZoneDefaults"></a>

```csharp
private void ResetZoneDefaults()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccountDnsSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccountDnsSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccountDnsSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccountDnsSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountDnsSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountDnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccountDnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaults">ZoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference">AccountDnsSettingsZoneDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaultsInput">ZoneDefaultsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ZoneDefaults`<sup>Required</sup> <a name="ZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaults"></a>

```csharp
public AccountDnsSettingsZoneDefaultsOutputReference ZoneDefaults { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference">AccountDnsSettingsZoneDefaultsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ZoneDefaultsInput`<sup>Optional</sup> <a name="ZoneDefaultsInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaultsInput"></a>

```csharp
public object ZoneDefaultsInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountDnsSettingsConfig <a name="AccountDnsSettingsConfig" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccountDnsSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    AccountDnsSettingsZoneDefaults ZoneDefaults = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.zoneDefaults">ZoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#account_id AccountDnsSettings#account_id}

---

##### `ZoneDefaults`<sup>Optional</sup> <a name="ZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.zoneDefaults"></a>

```csharp
public AccountDnsSettingsZoneDefaults ZoneDefaults { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}.

---

### AccountDnsSettingsZoneDefaults <a name="AccountDnsSettingsZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccountDnsSettingsZoneDefaults {
    object FlattenAllCnames = null,
    object FoundationDns = null,
    AccountDnsSettingsZoneDefaultsInternalDns InternalDns = null,
    object MultiProvider = null,
    AccountDnsSettingsZoneDefaultsNameservers Nameservers = null,
    double NsTtl = null,
    object SecondaryOverrides = null,
    AccountDnsSettingsZoneDefaultsSoa Soa = null,
    string ZoneMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.flattenAllCnames">FlattenAllCnames</a></code> | <code>object</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.foundationDns">FoundationDns</a></code> | <code>object</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.internalDns">InternalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.multiProvider">MultiProvider</a></code> | <code>object</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nameservers">Nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nsTtl">NsTtl</a></code> | <code>double</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.secondaryOverrides">SecondaryOverrides</a></code> | <code>object</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.soa">Soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.zoneMode">ZoneMode</a></code> | <code>string</code> | Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only". |

---

##### `FlattenAllCnames`<sup>Optional</sup> <a name="FlattenAllCnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.flattenAllCnames"></a>

```csharp
public object FlattenAllCnames { get; set; }
```

- *Type:* object

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#flatten_all_cnames AccountDnsSettings#flatten_all_cnames}

---

##### `FoundationDns`<sup>Optional</sup> <a name="FoundationDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.foundationDns"></a>

```csharp
public object FoundationDns { get; set; }
```

- *Type:* object

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#foundation_dns AccountDnsSettings#foundation_dns}

---

##### `InternalDns`<sup>Optional</sup> <a name="InternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.internalDns"></a>

```csharp
public AccountDnsSettingsZoneDefaultsInternalDns InternalDns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#internal_dns AccountDnsSettings#internal_dns}

---

##### `MultiProvider`<sup>Optional</sup> <a name="MultiProvider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.multiProvider"></a>

```csharp
public object MultiProvider { get; set; }
```

- *Type:* object

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#multi_provider AccountDnsSettings#multi_provider}

---

##### `Nameservers`<sup>Optional</sup> <a name="Nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nameservers"></a>

```csharp
public AccountDnsSettingsZoneDefaultsNameservers Nameservers { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#nameservers AccountDnsSettings#nameservers}

---

##### `NsTtl`<sup>Optional</sup> <a name="NsTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nsTtl"></a>

```csharp
public double NsTtl { get; set; }
```

- *Type:* double

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#ns_ttl AccountDnsSettings#ns_ttl}

---

##### `SecondaryOverrides`<sup>Optional</sup> <a name="SecondaryOverrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.secondaryOverrides"></a>

```csharp
public object SecondaryOverrides { get; set; }
```

- *Type:* object

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#secondary_overrides AccountDnsSettings#secondary_overrides}

---

##### `Soa`<sup>Optional</sup> <a name="Soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.soa"></a>

```csharp
public AccountDnsSettingsZoneDefaultsSoa Soa { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#soa AccountDnsSettings#soa}

---

##### `ZoneMode`<sup>Optional</sup> <a name="ZoneMode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.zoneMode"></a>

```csharp
public string ZoneMode { get; set; }
```

- *Type:* string

Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#zone_mode AccountDnsSettings#zone_mode}

---

### AccountDnsSettingsZoneDefaultsInternalDns <a name="AccountDnsSettingsZoneDefaultsInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccountDnsSettingsZoneDefaultsInternalDns {
    string ReferenceZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.property.referenceZoneId">ReferenceZoneId</a></code> | <code>string</code> | The ID of the zone to fallback to. |

---

##### `ReferenceZoneId`<sup>Optional</sup> <a name="ReferenceZoneId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.property.referenceZoneId"></a>

```csharp
public string ReferenceZoneId { get; set; }
```

- *Type:* string

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#reference_zone_id AccountDnsSettings#reference_zone_id}

---

### AccountDnsSettingsZoneDefaultsNameservers <a name="AccountDnsSettingsZoneDefaultsNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccountDnsSettingsZoneDefaultsNameservers {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.property.type">Type</a></code> | <code>string</code> | Nameserver type Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant". |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Nameserver type Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#type AccountDnsSettings#type}

---

### AccountDnsSettingsZoneDefaultsSoa <a name="AccountDnsSettingsZoneDefaultsSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccountDnsSettingsZoneDefaultsSoa {
    double Expire = null,
    double MinTtl = null,
    string Mname = null,
    double Refresh = null,
    double Retry = null,
    string Rname = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.expire">Expire</a></code> | <code>double</code> | Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.minTtl">MinTtl</a></code> | <code>double</code> | The time to live (TTL) for negative caching of records within the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.mname">Mname</a></code> | <code>string</code> | The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.refresh">Refresh</a></code> | <code>double</code> | Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.retry">Retry</a></code> | <code>double</code> | Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.rname">Rname</a></code> | <code>string</code> | The email address of the zone administrator, with the first label representing the local part of the email address. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.ttl">Ttl</a></code> | <code>double</code> | The time to live (TTL) of the SOA record itself. |

---

##### `Expire`<sup>Optional</sup> <a name="Expire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.expire"></a>

```csharp
public double Expire { get; set; }
```

- *Type:* double

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#expire AccountDnsSettings#expire}

---

##### `MinTtl`<sup>Optional</sup> <a name="MinTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.minTtl"></a>

```csharp
public double MinTtl { get; set; }
```

- *Type:* double

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#min_ttl AccountDnsSettings#min_ttl}

---

##### `Mname`<sup>Optional</sup> <a name="Mname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.mname"></a>

```csharp
public string Mname { get; set; }
```

- *Type:* string

The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#mname AccountDnsSettings#mname}

---

##### `Refresh`<sup>Optional</sup> <a name="Refresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.refresh"></a>

```csharp
public double Refresh { get; set; }
```

- *Type:* double

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#refresh AccountDnsSettings#refresh}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.retry"></a>

```csharp
public double Retry { get; set; }
```

- *Type:* double

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#retry AccountDnsSettings#retry}

---

##### `Rname`<sup>Optional</sup> <a name="Rname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.rname"></a>

```csharp
public string Rname { get; set; }
```

- *Type:* string

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#rname AccountDnsSettings#rname}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/account_dns_settings#ttl AccountDnsSettings#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### AccountDnsSettingsZoneDefaultsInternalDnsOutputReference <a name="AccountDnsSettingsZoneDefaultsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccountDnsSettingsZoneDefaultsInternalDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId">ResetReferenceZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReferenceZoneId` <a name="ResetReferenceZoneId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId"></a>

```csharp
private void ResetReferenceZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput">ReferenceZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId">ReferenceZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReferenceZoneIdInput`<sup>Optional</sup> <a name="ReferenceZoneIdInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput"></a>

```csharp
public string ReferenceZoneIdInput { get; }
```

- *Type:* string

---

##### `ReferenceZoneId`<sup>Required</sup> <a name="ReferenceZoneId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId"></a>

```csharp
public string ReferenceZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccountDnsSettingsZoneDefaultsNameserversOutputReference <a name="AccountDnsSettingsZoneDefaultsNameserversOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccountDnsSettingsZoneDefaultsNameserversOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccountDnsSettingsZoneDefaultsOutputReference <a name="AccountDnsSettingsZoneDefaultsOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccountDnsSettingsZoneDefaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns">PutInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers">PutNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa">PutSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames">ResetFlattenAllCnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFoundationDns">ResetFoundationDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetInternalDns">ResetInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetMultiProvider">ResetMultiProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNameservers">ResetNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNsTtl">ResetNsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides">ResetSecondaryOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSoa">ResetSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetZoneMode">ResetZoneMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalDns` <a name="PutInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns"></a>

```csharp
private void PutInternalDns(AccountDnsSettingsZoneDefaultsInternalDns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

---

##### `PutNameservers` <a name="PutNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers"></a>

```csharp
private void PutNameservers(AccountDnsSettingsZoneDefaultsNameservers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

---

##### `PutSoa` <a name="PutSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa"></a>

```csharp
private void PutSoa(AccountDnsSettingsZoneDefaultsSoa Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

---

##### `ResetFlattenAllCnames` <a name="ResetFlattenAllCnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames"></a>

```csharp
private void ResetFlattenAllCnames()
```

##### `ResetFoundationDns` <a name="ResetFoundationDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFoundationDns"></a>

```csharp
private void ResetFoundationDns()
```

##### `ResetInternalDns` <a name="ResetInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetInternalDns"></a>

```csharp
private void ResetInternalDns()
```

##### `ResetMultiProvider` <a name="ResetMultiProvider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetMultiProvider"></a>

```csharp
private void ResetMultiProvider()
```

##### `ResetNameservers` <a name="ResetNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNameservers"></a>

```csharp
private void ResetNameservers()
```

##### `ResetNsTtl` <a name="ResetNsTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNsTtl"></a>

```csharp
private void ResetNsTtl()
```

##### `ResetSecondaryOverrides` <a name="ResetSecondaryOverrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides"></a>

```csharp
private void ResetSecondaryOverrides()
```

##### `ResetSoa` <a name="ResetSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSoa"></a>

```csharp
private void ResetSoa()
```

##### `ResetZoneMode` <a name="ResetZoneMode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetZoneMode"></a>

```csharp
private void ResetZoneMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDns">InternalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference">AccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameservers">Nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference">AccountDnsSettingsZoneDefaultsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soa">Soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference">AccountDnsSettingsZoneDefaultsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput">FlattenAllCnamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput">FoundationDnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDnsInput">InternalDnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProviderInput">MultiProviderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameserversInput">NameserversInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtlInput">NsTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput">SecondaryOverridesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soaInput">SoaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneModeInput">ZoneModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames">FlattenAllCnames</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns">FoundationDns</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider">MultiProvider</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl">NsTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides">SecondaryOverrides</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode">ZoneMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalDns`<sup>Required</sup> <a name="InternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDns"></a>

```csharp
public AccountDnsSettingsZoneDefaultsInternalDnsOutputReference InternalDns { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference">AccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a>

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameservers"></a>

```csharp
public AccountDnsSettingsZoneDefaultsNameserversOutputReference Nameservers { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference">AccountDnsSettingsZoneDefaultsNameserversOutputReference</a>

---

##### `Soa`<sup>Required</sup> <a name="Soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soa"></a>

```csharp
public AccountDnsSettingsZoneDefaultsSoaOutputReference Soa { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference">AccountDnsSettingsZoneDefaultsSoaOutputReference</a>

---

##### `FlattenAllCnamesInput`<sup>Optional</sup> <a name="FlattenAllCnamesInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput"></a>

```csharp
public object FlattenAllCnamesInput { get; }
```

- *Type:* object

---

##### `FoundationDnsInput`<sup>Optional</sup> <a name="FoundationDnsInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput"></a>

```csharp
public object FoundationDnsInput { get; }
```

- *Type:* object

---

##### `InternalDnsInput`<sup>Optional</sup> <a name="InternalDnsInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDnsInput"></a>

```csharp
public object InternalDnsInput { get; }
```

- *Type:* object

---

##### `MultiProviderInput`<sup>Optional</sup> <a name="MultiProviderInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProviderInput"></a>

```csharp
public object MultiProviderInput { get; }
```

- *Type:* object

---

##### `NameserversInput`<sup>Optional</sup> <a name="NameserversInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameserversInput"></a>

```csharp
public object NameserversInput { get; }
```

- *Type:* object

---

##### `NsTtlInput`<sup>Optional</sup> <a name="NsTtlInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtlInput"></a>

```csharp
public double NsTtlInput { get; }
```

- *Type:* double

---

##### `SecondaryOverridesInput`<sup>Optional</sup> <a name="SecondaryOverridesInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput"></a>

```csharp
public object SecondaryOverridesInput { get; }
```

- *Type:* object

---

##### `SoaInput`<sup>Optional</sup> <a name="SoaInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soaInput"></a>

```csharp
public object SoaInput { get; }
```

- *Type:* object

---

##### `ZoneModeInput`<sup>Optional</sup> <a name="ZoneModeInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneModeInput"></a>

```csharp
public string ZoneModeInput { get; }
```

- *Type:* string

---

##### `FlattenAllCnames`<sup>Required</sup> <a name="FlattenAllCnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames"></a>

```csharp
public object FlattenAllCnames { get; }
```

- *Type:* object

---

##### `FoundationDns`<sup>Required</sup> <a name="FoundationDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns"></a>

```csharp
public object FoundationDns { get; }
```

- *Type:* object

---

##### `MultiProvider`<sup>Required</sup> <a name="MultiProvider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider"></a>

```csharp
public object MultiProvider { get; }
```

- *Type:* object

---

##### `NsTtl`<sup>Required</sup> <a name="NsTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl"></a>

```csharp
public double NsTtl { get; }
```

- *Type:* double

---

##### `SecondaryOverrides`<sup>Required</sup> <a name="SecondaryOverrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides"></a>

```csharp
public object SecondaryOverrides { get; }
```

- *Type:* object

---

##### `ZoneMode`<sup>Required</sup> <a name="ZoneMode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode"></a>

```csharp
public string ZoneMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccountDnsSettingsZoneDefaultsSoaOutputReference <a name="AccountDnsSettingsZoneDefaultsSoaOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccountDnsSettingsZoneDefaultsSoaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetExpire">ResetExpire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetMinTtl">ResetMinTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetMname">ResetMname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRefresh">ResetRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRname">ResetRname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpire` <a name="ResetExpire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetExpire"></a>

```csharp
private void ResetExpire()
```

##### `ResetMinTtl` <a name="ResetMinTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetMinTtl"></a>

```csharp
private void ResetMinTtl()
```

##### `ResetMname` <a name="ResetMname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetMname"></a>

```csharp
private void ResetMname()
```

##### `ResetRefresh` <a name="ResetRefresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRefresh"></a>

```csharp
private void ResetRefresh()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetRname` <a name="ResetRname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRname"></a>

```csharp
private void ResetRname()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expireInput">ExpireInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput">MinTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput">MnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput">RefreshInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retryInput">RetryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput">RnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire">Expire</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl">MinTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname">Mname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh">Refresh</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry">Retry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname">Rname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpireInput`<sup>Optional</sup> <a name="ExpireInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expireInput"></a>

```csharp
public double ExpireInput { get; }
```

- *Type:* double

---

##### `MinTtlInput`<sup>Optional</sup> <a name="MinTtlInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput"></a>

```csharp
public double MinTtlInput { get; }
```

- *Type:* double

---

##### `MnameInput`<sup>Optional</sup> <a name="MnameInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput"></a>

```csharp
public string MnameInput { get; }
```

- *Type:* string

---

##### `RefreshInput`<sup>Optional</sup> <a name="RefreshInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput"></a>

```csharp
public double RefreshInput { get; }
```

- *Type:* double

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retryInput"></a>

```csharp
public double RetryInput { get; }
```

- *Type:* double

---

##### `RnameInput`<sup>Optional</sup> <a name="RnameInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput"></a>

```csharp
public string RnameInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `Expire`<sup>Required</sup> <a name="Expire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire"></a>

```csharp
public double Expire { get; }
```

- *Type:* double

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl"></a>

```csharp
public double MinTtl { get; }
```

- *Type:* double

---

##### `Mname`<sup>Required</sup> <a name="Mname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname"></a>

```csharp
public string Mname { get; }
```

- *Type:* string

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh"></a>

```csharp
public double Refresh { get; }
```

- *Type:* double

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry"></a>

```csharp
public double Retry { get; }
```

- *Type:* double

---

##### `Rname`<sup>Required</sup> <a name="Rname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname"></a>

```csharp
public string Rname { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



