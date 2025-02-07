# `dataCloudflareWaitingRoom` Submodule <a name="`dataCloudflareWaitingRoom` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWaitingRoom <a name="DataCloudflareWaitingRoom" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/waiting_room cloudflare_waiting_room}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWaitingRoom(Construct Scope, string Id, DataCloudflareWaitingRoomConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig">DataCloudflareWaitingRoomConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig">DataCloudflareWaitingRoomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.resetWaitingRoomId">ResetWaitingRoomId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetWaitingRoomId` <a name="ResetWaitingRoomId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.resetWaitingRoomId"></a>

```csharp
private void ResetWaitingRoomId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWaitingRoom resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWaitingRoom.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWaitingRoom.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWaitingRoom.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWaitingRoom.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareWaitingRoom resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareWaitingRoom to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareWaitingRoom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/waiting_room#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWaitingRoom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.additionalRoutes">AdditionalRoutes</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList">DataCloudflareWaitingRoomAdditionalRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cookieAttributes">CookieAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference">DataCloudflareWaitingRoomCookieAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cookieSuffix">CookieSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.customPageHtml">CustomPageHtml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.defaultTemplateLanguage">DefaultTemplateLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.disableSessionRenewal">DisableSessionRenewal</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.enabledOriginCommands">EnabledOriginCommands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.jsonResponseEnabled">JsonResponseEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.newUsersPerMinute">NewUsersPerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.nextEventPrequeueStartTime">NextEventPrequeueStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.nextEventStartTime">NextEventStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueAll">QueueAll</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueingMethod">QueueingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueingStatusCode">QueueingStatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.sessionDuration">SessionDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.suspended">Suspended</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.totalActiveUsers">TotalActiveUsers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.turnstileAction">TurnstileAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.turnstileMode">TurnstileMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.waitingRoomIdInput">WaitingRoomIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.waitingRoomId">WaitingRoomId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AdditionalRoutes`<sup>Required</sup> <a name="AdditionalRoutes" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.additionalRoutes"></a>

```csharp
public DataCloudflareWaitingRoomAdditionalRoutesList AdditionalRoutes { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList">DataCloudflareWaitingRoomAdditionalRoutesList</a>

---

##### `CookieAttributes`<sup>Required</sup> <a name="CookieAttributes" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cookieAttributes"></a>

```csharp
public DataCloudflareWaitingRoomCookieAttributesOutputReference CookieAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference">DataCloudflareWaitingRoomCookieAttributesOutputReference</a>

---

##### `CookieSuffix`<sup>Required</sup> <a name="CookieSuffix" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cookieSuffix"></a>

```csharp
public string CookieSuffix { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `CustomPageHtml`<sup>Required</sup> <a name="CustomPageHtml" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.customPageHtml"></a>

```csharp
public string CustomPageHtml { get; }
```

- *Type:* string

---

##### `DefaultTemplateLanguage`<sup>Required</sup> <a name="DefaultTemplateLanguage" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.defaultTemplateLanguage"></a>

```csharp
public string DefaultTemplateLanguage { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableSessionRenewal`<sup>Required</sup> <a name="DisableSessionRenewal" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.disableSessionRenewal"></a>

```csharp
public IResolvable DisableSessionRenewal { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnabledOriginCommands`<sup>Required</sup> <a name="EnabledOriginCommands" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.enabledOriginCommands"></a>

```csharp
public string[] EnabledOriginCommands { get; }
```

- *Type:* string[]

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JsonResponseEnabled`<sup>Required</sup> <a name="JsonResponseEnabled" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.jsonResponseEnabled"></a>

```csharp
public IResolvable JsonResponseEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NewUsersPerMinute`<sup>Required</sup> <a name="NewUsersPerMinute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.newUsersPerMinute"></a>

```csharp
public double NewUsersPerMinute { get; }
```

- *Type:* double

---

##### `NextEventPrequeueStartTime`<sup>Required</sup> <a name="NextEventPrequeueStartTime" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.nextEventPrequeueStartTime"></a>

```csharp
public string NextEventPrequeueStartTime { get; }
```

- *Type:* string

---

##### `NextEventStartTime`<sup>Required</sup> <a name="NextEventStartTime" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.nextEventStartTime"></a>

```csharp
public string NextEventStartTime { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `QueueAll`<sup>Required</sup> <a name="QueueAll" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueAll"></a>

```csharp
public IResolvable QueueAll { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `QueueingMethod`<sup>Required</sup> <a name="QueueingMethod" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueingMethod"></a>

```csharp
public string QueueingMethod { get; }
```

- *Type:* string

---

##### `QueueingStatusCode`<sup>Required</sup> <a name="QueueingStatusCode" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueingStatusCode"></a>

```csharp
public double QueueingStatusCode { get; }
```

- *Type:* double

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.sessionDuration"></a>

```csharp
public double SessionDuration { get; }
```

- *Type:* double

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.suspended"></a>

```csharp
public IResolvable Suspended { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TotalActiveUsers`<sup>Required</sup> <a name="TotalActiveUsers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.totalActiveUsers"></a>

```csharp
public double TotalActiveUsers { get; }
```

- *Type:* double

---

##### `TurnstileAction`<sup>Required</sup> <a name="TurnstileAction" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.turnstileAction"></a>

```csharp
public string TurnstileAction { get; }
```

- *Type:* string

---

##### `TurnstileMode`<sup>Required</sup> <a name="TurnstileMode" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.turnstileMode"></a>

```csharp
public string TurnstileMode { get; }
```

- *Type:* string

---

##### `WaitingRoomIdInput`<sup>Optional</sup> <a name="WaitingRoomIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.waitingRoomIdInput"></a>

```csharp
public string WaitingRoomIdInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `WaitingRoomId`<sup>Required</sup> <a name="WaitingRoomId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.waitingRoomId"></a>

```csharp
public string WaitingRoomId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWaitingRoomAdditionalRoutes <a name="DataCloudflareWaitingRoomAdditionalRoutes" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWaitingRoomAdditionalRoutes {

};
```


### DataCloudflareWaitingRoomConfig <a name="DataCloudflareWaitingRoomConfig" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWaitingRoomConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ZoneId,
    string WaitingRoomId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.waitingRoomId">WaitingRoomId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/waiting_room#waiting_room_id DataCloudflareWaitingRoom#waiting_room_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/waiting_room#zone_id DataCloudflareWaitingRoom#zone_id}

---

##### `WaitingRoomId`<sup>Optional</sup> <a name="WaitingRoomId" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.waitingRoomId"></a>

```csharp
public string WaitingRoomId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/waiting_room#waiting_room_id DataCloudflareWaitingRoom#waiting_room_id}.

---

### DataCloudflareWaitingRoomCookieAttributes <a name="DataCloudflareWaitingRoomCookieAttributes" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWaitingRoomCookieAttributes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWaitingRoomAdditionalRoutesList <a name="DataCloudflareWaitingRoomAdditionalRoutesList" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWaitingRoomAdditionalRoutesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.get"></a>

```csharp
private DataCloudflareWaitingRoomAdditionalRoutesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareWaitingRoomAdditionalRoutesOutputReference <a name="DataCloudflareWaitingRoomAdditionalRoutesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWaitingRoomAdditionalRoutesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutes">DataCloudflareWaitingRoomAdditionalRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWaitingRoomAdditionalRoutes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutes">DataCloudflareWaitingRoomAdditionalRoutes</a>

---


### DataCloudflareWaitingRoomCookieAttributesOutputReference <a name="DataCloudflareWaitingRoomCookieAttributesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWaitingRoomCookieAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.samesite">Samesite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.secure">Secure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributes">DataCloudflareWaitingRoomCookieAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Samesite`<sup>Required</sup> <a name="Samesite" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.samesite"></a>

```csharp
public string Samesite { get; }
```

- *Type:* string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.secure"></a>

```csharp
public string Secure { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWaitingRoomCookieAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributes">DataCloudflareWaitingRoomCookieAttributes</a>

---



