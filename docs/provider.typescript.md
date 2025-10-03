# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-cloudflare.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudflareProvider <a name="CloudflareProvider" id="@cdktf/provider-cloudflare.provider.CloudflareProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs cloudflare}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-cloudflare'

new provider.CloudflareProvider(scope: Construct, id: string, config?: CloudflareProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig">CloudflareProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig">CloudflareProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiToken">resetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiUserServiceKey">resetApiUserServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.resetUserAgentOperatorSuffix">resetUserAgentOperatorSuffix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetApiToken` <a name="resetApiToken" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiToken"></a>

```typescript
public resetApiToken(): void
```

##### `resetApiUserServiceKey` <a name="resetApiUserServiceKey" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetApiUserServiceKey"></a>

```typescript
public resetApiUserServiceKey(): void
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetUserAgentOperatorSuffix` <a name="resetUserAgentOperatorSuffix" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.resetUserAgentOperatorSuffix"></a>

```typescript
public resetUserAgentOperatorSuffix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudflareProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-cloudflare'

provider.CloudflareProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-cloudflare'

provider.CloudflareProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-cloudflare'

provider.CloudflareProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-cloudflare'

provider.CloudflareProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudflareProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudflareProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudflareProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudflareProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiTokenInput">apiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKeyInput">apiUserServiceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffixInput">userAgentOperatorSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKey">apiUserServiceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffix">userAgentOperatorSuffix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiTokenInput"></a>

```typescript
public readonly apiTokenInput: string;
```

- *Type:* string

---

##### `apiUserServiceKeyInput`<sup>Optional</sup> <a name="apiUserServiceKeyInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKeyInput"></a>

```typescript
public readonly apiUserServiceKeyInput: string;
```

- *Type:* string

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `userAgentOperatorSuffixInput`<sup>Optional</sup> <a name="userAgentOperatorSuffixInput" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffixInput"></a>

```typescript
public readonly userAgentOperatorSuffixInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `apiUserServiceKey`<sup>Optional</sup> <a name="apiUserServiceKey" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.apiUserServiceKey"></a>

```typescript
public readonly apiUserServiceKey: string;
```

- *Type:* string

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `userAgentOperatorSuffix`<sup>Optional</sup> <a name="userAgentOperatorSuffix" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.userAgentOperatorSuffix"></a>

```typescript
public readonly userAgentOperatorSuffix: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.provider.CloudflareProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudflareProviderConfig <a name="CloudflareProviderConfig" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-cloudflare'

const cloudflareProviderConfig: provider.CloudflareProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiKey">apiKey</a></code> | <code>string</code> | The API key for operations. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiToken">apiToken</a></code> | <code>string</code> | The API Token for operations. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiUserServiceKey">apiUserServiceKey</a></code> | <code>string</code> | A special Cloudflare API key good for a restricted set of endpoints. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.baseUrl">baseUrl</a></code> | <code>string</code> | Value to override the default HTTP client base URL. Alternatively, can be configured using the `base_url` environment variable. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.email">email</a></code> | <code>string</code> | A registered Cloudflare email address. |
| <code><a href="#@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.userAgentOperatorSuffix">userAgentOperatorSuffix</a></code> | <code>string</code> | A value to append to the HTTP User Agent for all API calls. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs#alias CloudflareProvider#alias}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

The API key for operations.

Alternatively, can be configured using the `CLOUDFLARE_API_KEY` environment variable. API keys are [now considered legacy by Cloudflare](https://developers.cloudflare.com/fundamentals/api/get-started/keys/#limitations), API tokens should be used instead. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs#api_key CloudflareProvider#api_key}

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

The API Token for operations.

Alternatively, can be configured using the `CLOUDFLARE_API_TOKEN` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs#api_token CloudflareProvider#api_token}

---

##### `apiUserServiceKey`<sup>Optional</sup> <a name="apiUserServiceKey" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.apiUserServiceKey"></a>

```typescript
public readonly apiUserServiceKey: string;
```

- *Type:* string

A special Cloudflare API key good for a restricted set of endpoints.

Alternatively, can be configured using the `CLOUDFLARE_API_USER_SERVICE_KEY` environment variable. Must provide only one of `api_key`, `api_token`, `api_user_service_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs#api_user_service_key CloudflareProvider#api_user_service_key}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

Value to override the default HTTP client base URL. Alternatively, can be configured using the `base_url` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs#base_url CloudflareProvider#base_url}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

A registered Cloudflare email address.

Alternatively, can be configured using the `CLOUDFLARE_EMAIL` environment variable. Required when using `api_key`. Conflicts with `api_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs#email CloudflareProvider#email}

---

##### `userAgentOperatorSuffix`<sup>Optional</sup> <a name="userAgentOperatorSuffix" id="@cdktf/provider-cloudflare.provider.CloudflareProviderConfig.property.userAgentOperatorSuffix"></a>

```typescript
public readonly userAgentOperatorSuffix: string;
```

- *Type:* string

A value to append to the HTTP User Agent for all API calls.

This value is not something most users need to modify however, if you are using a non-standard provider or operator configuration, this is recommended to assist in uniquely identifying your traffic. **Setting this value will remove the Terraform version from the HTTP User Agent string and may have unintended consequences**. Alternatively, can be configured using the `CLOUDFLARE_USER_AGENT_OPERATOR_SUFFIX` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs#user_agent_operator_suffix CloudflareProvider#user_agent_operator_suffix}

---



