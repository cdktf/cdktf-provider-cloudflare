# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-cloudflare.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudflareProvider <a name="CloudflareProvider" id="@cdktf/provider-cloudflare.provider.CloudflareProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs cloudflare}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CloudflareProvider(Construct Scope, string Id, CloudflareProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig">CloudflareProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig">CloudflareProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiUserServiceKey">ResetApiUserServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetUserAgentOperatorSuffix">ResetUserAgentOperatorSuffix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiToken"></a>

```csharp
private void ResetApiToken()
```

##### `ResetApiUserServiceKey` <a name="ResetApiUserServiceKey" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiUserServiceKey"></a>

```csharp
private void ResetApiUserServiceKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetUserAgentOperatorSuffix` <a name="ResetUserAgentOperatorSuffix" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetUserAgentOperatorSuffix"></a>

```csharp
private void ResetUserAgentOperatorSuffix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudflareProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudflareProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudflareProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudflareProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CloudflareProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudflareProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudflareProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudflareProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudflareProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiTokenInput">ApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKeyInput">ApiUserServiceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffixInput">UserAgentOperatorSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiToken">ApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKey">ApiUserServiceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffix">UserAgentOperatorSuffix</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiTokenInput"></a>

```csharp
public string ApiTokenInput { get; }
```

- *Type:* string

---

##### `ApiUserServiceKeyInput`<sup>Optional</sup> <a name="ApiUserServiceKeyInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKeyInput"></a>

```csharp
public string ApiUserServiceKeyInput { get; }
```

- *Type:* string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `UserAgentOperatorSuffixInput`<sup>Optional</sup> <a name="UserAgentOperatorSuffixInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffixInput"></a>

```csharp
public string UserAgentOperatorSuffixInput { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiToken"></a>

```csharp
public string ApiToken { get; }
```

- *Type:* string

---

##### `ApiUserServiceKey`<sup>Optional</sup> <a name="ApiUserServiceKey" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKey"></a>

```csharp
public string ApiUserServiceKey { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `UserAgentOperatorSuffix`<sup>Optional</sup> <a name="UserAgentOperatorSuffix" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffix"></a>

```csharp
public string UserAgentOperatorSuffix { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudflareProviderConfig <a name="CloudflareProviderConfig" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CloudflareProviderConfig {
    string Alias = null,
    string ApiKey = null,
    string ApiToken = null,
    string ApiUserServiceKey = null,
    string BaseUrl = null,
    string Email = null,
    string UserAgentOperatorSuffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | The API key for operations. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiToken">ApiToken</a></code> | <code>string</code> | The API Token for operations. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiUserServiceKey">ApiUserServiceKey</a></code> | <code>string</code> | A special Cloudflare API key good for a restricted set of endpoints. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.baseUrl">BaseUrl</a></code> | <code>string</code> | Value to override the default HTTP client base URL. Alternatively, can be configured using the `base_url` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.email">Email</a></code> | <code>string</code> | A registered Cloudflare email address. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.userAgentOperatorSuffix">UserAgentOperatorSuffix</a></code> | <code>string</code> | A value to append to the HTTP User Agent for all API calls. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs#alias CloudflareProvider#alias}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

The API key for operations.

Alternatively, can be configured using the `CLOUDFLARE_API_KEY` environment variable. API keys are [now considered legacy by Cloudflare](https://developers.cloudflare.com/fundamentals/api/get-started/keys/#limitations), API tokens should be used instead. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs#api_key CloudflareProvider#api_key}

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiToken"></a>

```csharp
public string ApiToken { get; set; }
```

- *Type:* string

The API Token for operations.

Alternatively, can be configured using the `CLOUDFLARE_API_TOKEN` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs#api_token CloudflareProvider#api_token}

---

##### `ApiUserServiceKey`<sup>Optional</sup> <a name="ApiUserServiceKey" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiUserServiceKey"></a>

```csharp
public string ApiUserServiceKey { get; set; }
```

- *Type:* string

A special Cloudflare API key good for a restricted set of endpoints.

Alternatively, can be configured using the `CLOUDFLARE_API_USER_SERVICE_KEY` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs#api_user_service_key CloudflareProvider#api_user_service_key}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

Value to override the default HTTP client base URL. Alternatively, can be configured using the `base_url` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs#base_url CloudflareProvider#base_url}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

A registered Cloudflare email address.

Alternatively, can be configured using the `CLOUDFLARE_EMAIL` environment variable. Required when using `api_key`. Conflicts with `api_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs#email CloudflareProvider#email}

---

##### `UserAgentOperatorSuffix`<sup>Optional</sup> <a name="UserAgentOperatorSuffix" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.userAgentOperatorSuffix"></a>

```csharp
public string UserAgentOperatorSuffix { get; set; }
```

- *Type:* string

A value to append to the HTTP User Agent for all API calls.

This value is not something most users need to modify however, if you are using a non-standard provider or operator configuration, this is recommended to assist in uniquely identifying your traffic. **Setting this value will remove the Terraform version from the HTTP User Agent string and may have unintended consequences**. Alternatively, can be configured using the `CLOUDFLARE_USER_AGENT_OPERATOR_SUFFIX` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs#user_agent_operator_suffix CloudflareProvider#user_agent_operator_suffix}

---



